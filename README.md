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

The public Docker Hub image is `docker.io/laxuman11/travel-with-kst`. After its first successful security scan, run it with one command:

```bash
docker run -d --name travel-with-kst --restart unless-stopped -p 8080:8080 docker.io/laxuman11/travel-with-kst:latest
```

Open `http://localhost:8080`. Docker pulls the image automatically if it is not already on the machine. The container uses unprivileged NGINX and exposes `/healthz` for health checks.

To publish updates, create a **public** Docker Hub repository named `travel-with-kst` in the `laxuman11` namespace. Add the GitHub Actions repository variable `DOCKERHUB_USERNAME=laxuman11` and a `DOCKERHUB_TOKEN` repository secret with Docker Hub repository Read & Write access. Merging a change to `main` builds a commit-tagged image, scans it, and publishes `latest` only when the scan passes.

## GitHub Actions pipelines

- `ci.yaml` and `build-check.yaml` run dependency installation, lint, static build, and export smoke tests for pull requests. CI also runs on pushes to `main`.
- `dependency-review.yaml` checks pull-request dependency changes for high or critical vulnerabilities.
- `codeql.yaml` scans JavaScript and TypeScript on pull requests, pushes to `main`, and weekly.
- `container-release.yaml` verifies the app, builds and publishes a commit-tagged image to Docker Hub, scans it with Trivy, promotes it to `latest` after a clean scan, then deploys it to Kubernetes when enabled. A failed image scan blocks promotion and deployment.
- `deploy.yml` is the separate GitHub Pages publishing workflow. It is not the Kubernetes deployment.

## Kubernetes setup

The website deployment is in `k8s/website/`. With a Kubernetes context selected, deploy it and let Kubernetes pull the public Docker Hub image with one command:

```bash
kubectl apply -k k8s/website
```

This creates the namespace, two replicas, a ClusterIP Service, and a Traefik Ingress. The Deployment uses rolling updates, startup/readiness/liveness probes, a non-root container, and a read-only root filesystem. On a failed rollout, the release workflow attempts `kubectl rollout undo`.

Before the first automated deployment:

1. Configure a reachable Kubernetes cluster with an Ingress controller for class `traefik`. Update `host` in `k8s/website/ingress.yaml` to a DNS name routed to that controller.
2. As a cluster administrator, create the namespace and namespace-scoped deployment account once:

   ```bash
   kubectl apply -f k8s/website/namespace.yaml
   kubectl apply -f k8s/website/github-deployer-rbac.yaml
   ```

   Build a kubeconfig for the `github-deployer` service account and add it as the repository Actions secret `KUBE_CONFIG`. That account is limited to deployments, services, ingress, and replica-set rollout status in the app namespace.
3. Set the repository variable `K8S_DEPLOY_ENABLED` to `true`. The image is public on Docker Hub, so Kubernetes does not need a registry pull secret.
4. Ensure the repository's Actions are enabled. A push to `main` then runs the container release pipeline.

Inspect deployment health and roll back manually with:

```bash
kubectl rollout status deployment/travel-with-kst -n travel-with-kst
kubectl rollout history deployment/travel-with-kst -n travel-with-kst
kubectl rollout undo deployment/travel-with-kst -n travel-with-kst
```

The older resources in `k8s/manifest/` describe a separate API/PostgreSQL setup and are not applied by the website release workflow. Use `k8s/website/` for this Next.js static website.
