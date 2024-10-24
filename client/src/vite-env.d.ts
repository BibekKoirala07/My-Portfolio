/// <reference types="vite/client" />
declare module "*.css";

declare module "*.svg" {
  const content: any;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_PROD_FRONTEND_URL: string;
  readonly VITE_DEV_FRONTEND_URL: string;
  readonly VITE_PROD_BACKEND_URL: string;
  readonly VITE_DEV_BACKEND_URL: string;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
