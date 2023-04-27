import i18next from 'i18next'

import { en } from './en'
import { ru } from './ru'
import { BeersTableKey } from '../constants'

i18next.addResourceBundle('ru', BeersTableKey, ru)
i18next.addResourceBundle('en', BeersTableKey, en)
