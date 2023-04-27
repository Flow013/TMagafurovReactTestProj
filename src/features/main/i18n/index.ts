import i18next from 'i18next'

import { en } from './en'
import { ru } from './ru'
import { mainKey } from '../constants'

i18next.addResourceBundle('ru', mainKey, ru)
i18next.addResourceBundle('en', mainKey, en)
