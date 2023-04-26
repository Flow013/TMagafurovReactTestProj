import { useQuery } from '@tanstack/react-query'
import { punkApiAxiosInstance } from '../../../app/axios/punkApiAxiosInstance'
import { BeerItem } from '../models/BeerItem'

type useBeersGetParams = {
  page: number
  per_page: number
}

export function useBeersGet(params: useBeersGetParams) {
  return useQuery({
    queryKey: ['beers', params],

    queryFn: async ({ signal }) => {
      return await punkApiAxiosInstance
        .get<BeerItem[]>('/beers', {
          params: params,
          signal
        })
        .then((res) => res.data)
    }
  })
}
