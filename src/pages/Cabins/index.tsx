import { useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import Option from "../../components/Option";
import Select from "../../components/Select";
import CabinsList from "../../features/cabins/CabinsList";

export default function Cabins() {
  const [searchParams, setSearchParams] = useSearchParams()
  if (!searchParams.get('sort')) searchParams.set('sort', 'name-low')
  // setSearchParams(searchParams)

  return (
    <div className="py-8 px-6">
      <div className="flex items-center justify-between">
        <Heading type="secondary">Cabins List</Heading>
        <Select id="sort" type="sort" onChange={(e) => setSearchParams(params => {
          params.set('sort', e.target.value)
          return params
        })}>
          <Option type="sort" value="none">Sort by</Option>
          <Option type="sort" value="latest">Sort by time (latest)</Option>
          <Option type="sort" value="oldest">Sort by time (oldest)</Option>
          <Option type="sort" value="name-low">Sort by name (A-Z)</Option>
          <Option type="sort" value="name-high">Sort by name (Z-A)</Option>
          <Option type="sort" value="price-low">Sort by price (low first)</Option>
          <Option type="sort" value="price-high">Sort by price (high first)</Option>
        </Select>
      </div>
      <CabinsList pagination={true} />
    </div>
  )
}
