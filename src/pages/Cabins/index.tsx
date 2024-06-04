import { useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import Option from "../../components/Option";
import Select from "../../components/Select";
import CabinsList from "../../features/cabins/CabinsList";
import { useTranslation } from "react-i18next";

export default function Cabins() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  if (!searchParams.get('sort')) searchParams.set('sort', 'name-low')
  // setSearchParams(searchParams)

  return (
    <div className="pt-8 pb-28 px-6 bg-stone-0">
      <div className="flex items-center justify-between">
        <Heading type="secondary">{t('cabins.default.heading')}</Heading>
        <Select id="sort" type="sort" onChange={(e) => setSearchParams(params => {
          params.set('sort', e.target.value)
          return params
        })}>
          <Option type="sort" value="none">{t('cabins.default.sort.default')}</Option>
          <Option type="sort" value="latest">{t('cabins.default.sort.time-ins')}</Option>
          <Option type="sort" value="oldest">{t('cabins.default.sort.time-des')}</Option>
          <Option type="sort" value="name-low">{t('cabins.default.sort.name-ins')}</Option>
          <Option type="sort" value="name-high">{t('cabins.default.sort.name-des')}</Option>
          <Option type="sort" value="price-low">{t('cabins.default.sort.price-ins')}</Option>
          <Option type="sort" value="price-high">{t('cabins.default.sort.price-des')}</Option>
        </Select>
      </div>
      <CabinsList pagination={true} />
    </div>
  )
}
