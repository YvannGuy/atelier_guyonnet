import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* Verrouille la racine Turbopack si d’autres lockfiles existent plus haut dans l’arborescence. */
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
