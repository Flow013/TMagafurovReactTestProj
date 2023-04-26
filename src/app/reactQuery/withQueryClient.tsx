import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function withQueryClient<
  TProps extends Record<string, unknown> = Record<string, unknown>
>(Child: React.ComponentType<TProps>) {
  return (props: TProps) => (
    <QueryClientProvider client={queryClient}>
      <Child {...props} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
