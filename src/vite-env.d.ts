/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUNK_API_ROOT_ENDPOINT: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
