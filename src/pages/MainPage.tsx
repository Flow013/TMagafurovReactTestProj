import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { useTranslation } from 'react-i18next'
import { BeersFeature } from '../features'

export const MainPage: FC = () => {
  const { t } = useTranslation('app')

  return (
    <AppLayout>
      <BeersFeature />
    </AppLayout>
  )
}
