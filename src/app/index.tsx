import { compose } from 'ramda'
import { useTranslation } from 'react-i18next'
import { useTitle } from 'ahooks'
import { withAntDesign } from './antd'
import { withQueryClient } from './reactQuery'
import { AppRouterProvider } from './routers'

import './i18n'

function App() {
  const { t } = useTranslation('app')
  useTitle(t('title'))

  return <AppRouterProvider />
}

const withProviders = compose(
  withAntDesign,
  withQueryClient
  /* , withApollo, withRedux */
)
const AppWithProviders = withProviders(App)

export { AppWithProviders as App }
