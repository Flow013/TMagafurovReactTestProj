import { FC } from 'react'
import { AppLayout } from '../shared/ui/components/AppLayout'
import { useTranslation } from 'react-i18next'

export const MainPage: FC = () => {
  const { t } = useTranslation('app')

  return <AppLayout>{t('title')}</AppLayout>
}
