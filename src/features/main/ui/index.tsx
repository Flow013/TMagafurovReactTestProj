import { FC } from 'react'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography
export const View: FC<object> = () => {
  const { t } = useTranslation('feature/main')
  return (
    <Typography>
      <Title>{t('title')}</Title>
      <Paragraph>
        <ul>
          <li>
            <Link to={'/beers/table'}>{t('pageNames.BeersTablePage')}</Link>
          </li>
          <li>
            <Link to={'/beers/list'}>
              <Typography.Text delete>
                {t('pageNames.BeersListPage')}
              </Typography.Text>
            </Link>
          </li>
        </ul>
      </Paragraph>
    </Typography>
  )
}
