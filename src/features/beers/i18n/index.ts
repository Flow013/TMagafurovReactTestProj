import i18next from 'i18next'

import { en } from './en'
import { ru } from './ru'

i18next.addResources('ru', 'features/beers', ru) // TODO: Исправить добавление deep значений
i18next.addResources('en', 'features/beers', en)
