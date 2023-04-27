import { useInViewport } from 'ahooks'
import { useEffect } from 'react'

export interface IUseInfiniteScrollOptions {
  loadMoreCallback: () => unknown | Promise<unknown>
  loading: boolean
  hasNextPage?: boolean
}

export const useInfiniteScroll = (
  target: Parameters<typeof useInViewport>[0],
  options?: IUseInfiniteScrollOptions
) => {
  const { loadMoreCallback, loading, hasNextPage } = options || {}
  const [inViewport] = useInViewport(options && target)
  useEffect(() => {
    console.log(inViewport, loadMoreCallback, !loading, hasNextPage)
    if (inViewport && loadMoreCallback && !loading && hasNextPage) {
      loadMoreCallback()
    }
  }, [hasNextPage, inViewport, loadMoreCallback, loading])

  return {
    visible: inViewport,
    loading: hasNextPage && (loading || inViewport)
  }
}
