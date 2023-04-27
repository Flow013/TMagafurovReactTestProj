import type { IAppI18n } from './appResources/IApp.i18n'

import type { MainKeyType, IMainI18n } from '../../features/main'
import type {
  BeersTableKeyType,
  IBeersTableI18n
} from '../../features/beersTable'
import type { BeersListKeyType, IBeersListI18n } from '../../features/beersList'

export type DefaultNS = 'app'

const MainKey: MainKeyType = 'feature/main'
const BeersTableKey: BeersTableKeyType = 'feature/beersTable'
const BeersListKey: BeersListKeyType = 'feature/beersList'

export interface IResources {
  app: IAppI18n
  [MainKey]: IMainI18n
  [BeersTableKey]: IBeersTableI18n
  [BeersListKey]: IBeersListI18n
}
