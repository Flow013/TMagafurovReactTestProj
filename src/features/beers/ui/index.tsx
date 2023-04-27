import { FC, useMemo } from 'react'
import { useBeersGet } from '../api/useBeersGet'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { BeerItem } from '../models/BeerItem'
import { useTranslation } from 'react-i18next'

export const View: FC = () => {
  const { t, i18n } = useTranslation('features/beers')
  const { data = [], isLoading } = useBeersGet({ page: 1, per_page: 80 })

  const columns = useMemo<ColumnsType<BeerItem>>(
    () => [
      { dataIndex: 'id', title: t('beerItem.id') },
      { dataIndex: 'name', title: t('beerItem.name') },
      { dataIndex: 'description', title: t('beerItem.description') },
      { dataIndex: 'image_url', title: t('beerItem.image_url') }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  )
  console.log(t('beerItem.id'))
  return (
    <Table
      loading={isLoading}
      dataSource={data}
      rowKey="id"
      columns={columns}
    ></Table>
  )
}
