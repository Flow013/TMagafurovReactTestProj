import { FC } from 'react'
import { AppLayout } from '../shared/ui/widgets/AppLayout'
import { MainFeature } from '../features'

export const MainPage: FC = () => {
  return (
    <AppLayout>
      <MainFeature />
    </AppLayout>
  )
}
