# travel-with-KST
# https://karma96-wt.github.io/travel-with-KST/

Travel agency website

## Local development

This repository uses pnpm. From the repository root:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The production build is a Next.js static export. `pnpm build` creates `out/`, and `pnpm test` checks that the main routes and package hero image were exported.

## Docker

Build and run the static website container locally:

```bash
docker build -t travel-with-kst:local .
docker run --rm -p 8080:8080 travel-with-kst:local
```

Open `http://localhost:8080`. The container uses an unprivileged NGINX image and exposes `/healthz` for health checks.

## GitHub Actions pipelines

- `ci.yaml` and `build-check.yaml` run dependency installation, lint, static build, and export smoke tests for pull requests. CI also runs on pushes to `main`.
- `dependency-review.yaml` checks pull-request dependency changes for high or critical vulnerabilities.
- `codeql.yaml` scans JavaScript and TypeScript on pull requests, pushes to `main`, and weekly.
- `container-release.yaml` verifies the app, builds and publishes a commit-tagged image to GHCR, scans it with Trivy, then deploys it to Kubernetes. A failed image scan blocks deployment.
- `deploy.yml` is the separate GitHub Pages publishing workflow. It is not the Kubernetes deployment.

## Kubernetes setup

The website deployment is in `k8s/website/`. It creates two replicas, a ClusterIP Service, and an NGINX Ingress. The Deployment uses an explicit rolling-update strategy, startup/readiness/liveness probes, a non-root container, and a read-only root filesystem. On a failed rollout, the release workflow attempts `kubectl rollout undo`.

Before the first automated deployment:

1. Configure a reachable Kubernetes cluster with an NGINX Ingress controller. Update `host` in `k8s/website/ingress.yaml` to a DNS name routed to that controller.
2. As a cluster administrator, create the namespace and namespace-scoped deployment account once:

   ```bash
   kubectl apply -f k8s/website/namespace.yaml
   kubectl apply -f k8s/website/github-deployer-rbac.yaml
   ```

   Build a kubeconfig for the `github-deployer` service account and add it as the repository Actions secret `KUBE_CONFIG`. That account is limited to deployments, services, ingress, secrets, and replica-set rollout status in the app namespace.
3. Add `GHCR_PULL_TOKEN`, a GitHub classic personal access token with `read:packages`, so cluster nodes can pull the private GHCR image.
4. Ensure the repository's Actions are enabled. A push to `main` then runs the container release pipeline.

Inspect deployment health and roll back manually with:

```bash
kubectl rollout status deployment/travel-with-kst -n travel-with-kst
kubectl rollout history deployment/travel-with-kst -n travel-with-kst
kubectl rollout undo deployment/travel-with-kst -n travel-with-kst
```

The older resources in `k8s/manifest/` describe a separate API/PostgreSQL setup and are not applied by the website release workflow. Use `k8s/website/` for this Next.js static website.
