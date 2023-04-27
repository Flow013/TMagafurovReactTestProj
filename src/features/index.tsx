import { MainSpin } from '../shared/ui/components/MainSpin'
import loadable from '@loadable/component'

const loadableOptions = {
  fallback: <MainSpin />
}

export const MainFeature = loadable(() => import('./main'), loadableOptions)
export const BeersFeature = loadable(() => import('./beers'), loadableOptions)
