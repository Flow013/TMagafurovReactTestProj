import loadable from '@loadable/component'

export const ReactQueryDevtoolsLazy = loadable(
  () => import('@tanstack/react-query-devtools'),
  { resolveComponent: (i) => i.ReactQueryDevtools }
)
