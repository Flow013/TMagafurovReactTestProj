import { FC, useEffect, useMemo } from 'react'
import { useGetBeers } from '../api/useGetBeers'
import { useTranslation } from 'react-i18next'
import { message } from 'antd'
import { VirtualTable } from '../../../shared/ui/components/VirtualTable'
import { IUseInfiniteScrollOptions } from '../../../shared/hooks/useInfiniteScroll'
import { useColumns } from './useColumns'

export const View: FC<object> = () => {
  const { t } = useTranslation('features/beers')
  const { dataSource, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useGetBeers()

  const infinateScrollProps = useMemo<IUseInfiniteScrollOptions>(
    () => ({
      loadMoreCallback: fetchNextPage,
      loading: isLoading,
      hasNextPage
    }),
    [fetchNextPage, hasNextPage, isLoading]
  )

  const { columns } = useColumns()

  useEffect(() => {
    if (isError) {
      console.error(error)
      message.error(t('dataLoadError'))
    }
  }, [error, isError, t])

  return (
    <>
      <VirtualTable
        loading={isLoading}
        dataSource={dataSource}
        rowKey="id"
        columns={columns}
        infiniteScroll={infinateScrollProps}
      ></VirtualTable>
    </>
  )
}
