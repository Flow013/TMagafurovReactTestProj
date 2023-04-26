import { RadioChangeEvent, Radio } from 'antd'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { fallbackLng } from '../../../app/i18n'

const lngOptions = fallbackLng.map((x) => ({ label: x, value: x }))

export const LngSelector: FC = () => {
  const { i18n } = useTranslation()
  const onChangeLng = useCallback<(e: RadioChangeEvent) => void>(
    (e) => i18n.changeLanguage(e?.target?.value as string),
    [i18n]
  )
  console.log(i18n.language)
  return (
    <Radio.Group
      options={lngOptions}
      defaultValue={i18n.language}
      value={i18n.language}
      onChange={onChangeLng}
      optionType="button"
      buttonStyle="solid"
    />
  )
}
