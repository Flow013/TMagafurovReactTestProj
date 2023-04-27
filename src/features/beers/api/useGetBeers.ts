import { useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { punkApiAxiosInstance } from '../../../app/axios/punkApiAxiosInstance'
import { BeerItem } from '../models/BeerItem'
import { BeersTableKey } from '../constants'

export function useGetBeers(pageSize = 50) {
  const infiniteScrollResults = useInfiniteQuery({
    queryKey: [BeersTableKey],
    queryFn: async ({ signal, pageParam = 1 }) => {
      return await punkApiAxiosInstance
        .get<BeerItem[]>('/beers', {
          params: {
            page: +pageParam,
            per_page: pageSize
          },
          signal
        })
        .then((res) => res.data)
    },
    getNextPageParam: (_lastPage, pages) => {
      if (pages && pages.at(-1)!.length < pageSize) {
        return undefined
      }
      return pages.length + 1
    }
  })
  const results = useMemo<
    typeof infiniteScrollResults & { dataSource: BeerItem[] }
  >(
    () => ({
      ...infiniteScrollResults,
      dataSource:
        infiniteScrollResults.data?.pages?.reduce((prev, cur) =>
          prev.concat(cur)
        ) ?? []
    }),
    [infiniteScrollResults]
  )
  return results
}
