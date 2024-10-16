import { useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import Option from "../../components/Option";
import Select from "../../components/Select";
import { useTranslation } from "react-i18next";
import ToursList from "@/features/tours/ToursList";
import Input from "@/components/form/Input";
import Button from "@/components/Button";
import DateBox from "@/components/DateBox";
import ButtonLink from "@/components/ButtonLink";

export default function Tours() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  if (!searchParams.get('sort')) searchParams.set('sort', 'none')
  // if (!searchParams.get('sort')) searchParams.set('sort', 'none')

  // if (!searchParams.get('sort')) searchParams.set('sort', 'name-low')
  // setSearchParams(searchParams)

  return (
    <>
      <div className="relative">
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="uppercase text-stone-50 font-bold text-sm leading-8">Search Tour</h2>
          <p className="text-8xl text-stone-50 font-semibold font-title">Travel with us</p>
        </div>
        <img className="brightness-[90%] z-10 h-[33rem] w-full" src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="pb-24 bg-stone-0">
        <div className="">
          <ul className="flex justify-around items-center bg-stone-50 shadow-md px-6 py-3 w-[70%] thin:max-tiny:w-[90%] tiny:max-sm:w-[80%] mx-auto -translate-y-1/2 items-center thin:max-tiny:grid thin:max-tiny:grid-cols-2 thin:max-tiny:gap-6 ">
            <li className="text-stone-600 font-semibold flex gap-2">
              {/* <span>📅</span>
              <span>Date</span> */}
              <DateBox />
            </li>
            <li className="text-stone-600 font-semibold flex gap-2">
              <Select id="sort" type="type" onChange={(e) => setSearchParams(params => {
                params.set('type', e.target.value)
                return params
              })}>
                <Option type="type" value="none">
                  <div className="flex gap-2">
                    {/* <span>📅 </span> */}
                    <span> Type</span>
                  </div>
                </Option>
                <Option type="type" value="group">Group</Option>
                <Option type="type" value="private">Private</Option>
                <Option type="type" value="personal">Personal</Option>
              </Select>

            </li>
            <li className="text-stone-600 font-semibold flex gap-2">
              <Select id="sort" type="type" onChange={(e) => setSearchParams(params => {
                params.set('difficulty', e.target.value)
                return params
              })}>
                <Option type="type" value="none">
                  <div className="flex gap-2">
                    {/* <span>📅 </span> */}
                    <span> Difficulty</span>
                  </div>
                </Option>
                <Option type="type" value="easy">Easy</Option>
                <Option type="type" value="medium">Medium</Option>
                <Option type="type" value="difficult">Difficult</Option>
              </Select>

            </li>
            <li className="text-stone-600 font-semibold flex gap-2">
              <Select id="sort" type="sort" onChange={(e) => setSearchParams(params => {
                params.set('status', e.target.value)
                return params
              })}>
                <Option type="sort" value="none">
                  <div className="flex gap-2">
                    {/* <span>📅 </span> */}
                    <span> Status</span>
                  </div>
                </Option>
                <Option type="status" value="trending">Trending</Option>
                <Option type="status" value="popular">Popular</Option>
                <Option type="status" value="most-discount">Discount</Option>
              </Select>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-x-4 px-12  thin:max-tiny:grid-cols-1 items-start">
          <div className="bg-stone-50 px-5 py-4  shadow-md h-[full]">
            <div className="text-center [&>h1]:justify-center flex flex-col gap-3">
              <div className="pt-6 pb-4 px-3 flex justify-center [&>button]:w-[80%]">
                <Button type="secondary" onClick={() => window.location.assign('/tours')}>Reset filter</Button>
              </div>
              <hr className="mb-2" />
              <Heading type="secondary">Plan Your Trip</Heading>
              <p className="text-stone-500 text-xs">Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
            </div>
            <div className="px-3 mt-6 flex flex-col gap-3">
              <Input variant="login" placeholder="Tour name" type="text" id="name" />
              <Input variant="login" placeholder="Where to?" type="text" id="where" />
              <Input variant="login" placeholder="Date?" type="text" id="date" />
            </div>
            <div className="mt-4 px-3 flex flex-col gap-2">
              <Heading type="heading-4">Filter by price</Heading>
              <div>
                <input className="w-full" type="range" name="" id="" />
                <p className="text-sm text-stone-500">Price:
                  <span>12$</span>
                  <span> - </span>
                  <span>200$</span>
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <Button type="brand">Search now</Button>
            </div>
            <div className="flex justify-center mt-12">
              <img className="" src="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
          <div className="">
            <ToursList title="" type="normal" />
          </div>
        </div>
      </div>

    </>
  )
}
