import type { IAppI18n } from './appResources/IApp.i18n'

import type { BeersTableKeyType, IBeersI18n } from '../../features/beers'
import type { IMainI18n } from '../../features/main/i18n/IMain.i18n'

export type DefaultNS = 'app'

const BeersTableKey: BeersTableKeyType = 'feature/beersTable'

export interface IResources {
  app: IAppI18n
  [BeersTableKey]: IBeersI18n
  ['features/main']: IMainI18n
}
