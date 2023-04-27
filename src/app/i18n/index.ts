import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { IResources, DefaultNS } from './IResources'
import { appResources } from './appResources'

const defaultNS: DefaultNS = 'app'
export const fallbackLng = ['ru', 'en'] as const
// Ресурсы которые необходимо подгрузить заранее. Если подгрузка модуля ожидается через lazy, то не добавлять в список
const localNamespaces = ['app'] as const

const resources: Record<
  (typeof fallbackLng)[number],
  Pick<IResources, (typeof localNamespaces)[number]>
> = {
  en: { app: appResources.en },
  ru: { app: appResources.ru }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: fallbackLng as unknown as string[],
    detection: {
      // order and from where user language should be detected
      order: ['cookie', 'navigator', 'header', 'querystring', 'localStorage'],

      // keys or params to lookup language from
      lookupCookie: 'i18next',
      // cache user language
      caches: ['cookie'],
      cookieMinutes: 7 * 1440,
      cookieOptions: { path: '/' }
    },
    ns: localNamespaces,
    // defaultNS,
    resources
  })
  .catch(console.error)
