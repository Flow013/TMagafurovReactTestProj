import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtoolsLazy } from './ReactQueryDevtoolsLazy'

const queryClient = new QueryClient()

export function withQueryClient<
  TProps extends Record<string, unknown> = Record<string, unknown>
>(Child: React.ComponentType<TProps>) {
  return (props: TProps) => (
    <QueryClientProvider client={queryClient}>
      <Child {...props} />
      {import.meta.env.DEV && <ReactQueryDevtoolsLazy />}
    </QueryClientProvider>
  )
}
