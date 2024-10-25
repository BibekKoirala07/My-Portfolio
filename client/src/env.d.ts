interface ImportMetaEnv {
  readonly VITE_PROD_BACKEND_URL: string;
  readonly VITE_DEV_BACKEND_URL: string;
  readonly NODE_ENV: "development" | "production";
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
