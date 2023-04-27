import type { DefaultNS, IResources } from './IResources'

declare module 'i18next' {
  interface CustomTypeOptions {
    // defaultNS: DefaultNS
    resources: IResources
  }
}
