import i18next from 'i18next'

import { en } from './en'
import { ru } from './ru'
import { beersListKey } from '../constants'

i18next.addResourceBundle('ru', beersListKey, ru)
i18next.addResourceBundle('en', beersListKey, en)
