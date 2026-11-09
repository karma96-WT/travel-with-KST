import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { test } from "node:test";
import { join } from "node:path";

const requiredPages = [
  "index.html",
  "About.html",
  "blog.html",
  "destination.html",
  "packages.html",
  "Pages/Destination/1.html",
];

test("production export contains the main travel-agency routes", async () => {
  for (const page of requiredPages) {
    await assert.doesNotReject(
      access(join(process.cwd(), "out", page)),
      `Expected the static export to include out/${page}`,
    );
  }
});

test("production export contains the local travel imagery", async () => {
  await assert.doesNotReject(
    access(join(process.cwd(), "out", "images", "package-background.jpg")),
  );
});
