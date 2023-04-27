import type { IAppI18n } from './appResources/IApp.i18n'

import type { IBeersI18n } from '../../features/beers/i18n/IBeers.i18n'
import type { IMainI18n } from '../../features/main/i18n/IMain.i18n'

export type DefaultNS = 'app'

export interface IResources {
  app: IAppI18n
  ['features/beers']: IBeersI18n
  ['features/main']: IMainI18n
}
