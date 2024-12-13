import { SubmitHandler, useForm } from "react-hook-form";
import { HiCalendarDays, HiMagnifyingGlass } from "react-icons/hi2";

import Button from "@/components/Button";
import Form from "@/components/form/Form";
import FormItem from "@/components/form/FormItem";
import Input from "@/components/form/Input";
import { SearchTour } from "@/interfaces";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { FormEvent, useState } from "react";
import Heading from "@/components/Heading";

export default function SearchForm({ variant = "row" }: { variant?: 'col' | 'row' }) {
  const { formState, handleSubmit, register, reset } = useForm<SearchTour>()
  const [searchParams] = useSearchParams()
  const searchOb = JSON.parse(searchParams.get('search') || `{}`)
  const { priceRange, where: whereStr, date: whenStr, nameLike: nameStr } = searchOb
  const { errors } = formState
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [whenDate, setWhenDate] = useState('')
  const [where, setWhere] = useState('')
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [nameChange, setNameChange] = useState(0)
  const [whereChange, setWhereChange] = useState(0)
  const [dateChange, setDateChange] = useState(0)
  const [priceChange, setPriceChange] = useState(0)
  // console.log(whereChange, where)



  // const onSubmit: SubmitHandler<SearchTour> = function (data) {
  //   console.log('ok')
  //   if (Object.keys(data).length <= 0) return navigate('/tours')
  //   const { where, when, type } = data
  //   if (!where && !when && !type) return navigate('/tours')
  //   console.log(data)
  //   const options = {} as SearchTour;
  //   if (where) options.where = where
  //   if (when) options.when = when
  //   if (type) options.type = type

  //   // navigate(`/cabins?search=${encodeURIComponent(JSON.stringify(options))}`)
  //   // reset()
  // }
  const onSubmit = function (e: FormEvent) {
    console.log('ok')
    e.preventDefault()
    if ((!where && !whenDate && !type && (!price && price !== 0) && !name)) return navigate('/tours')
    const options = {} as SearchTour;
    if (where) options.where = where
    if (whenDate) options.date = whenDate
    if (type) options.type = type
    if (price) options.priceRange = price
    if (name) options.nameLike = name

    // ! one problem here is when we search in the search form with col and it will assign and reload page then we will have the search string still exist in the form but if we search again it will lost because we don't change it state yet therefore it will be empty string and therefore it doesn't get the query string data so that's it
    // * we will fix it later

    // console.log(encodeURIComponent(JSON.stringify(options)))

    console.log(options)

    window.location.assign(`/tours?search=${encodeURIComponent(JSON.stringify(options))}`)
    // navigate(`/tours?search=${encodeURIComponent(JSON.stringify(options))}`)

  }
  if (variant === 'col') return <>
    <form action="" onSubmit={onSubmit}>
      <div className="px-3 mt-6 flex flex-col gap-3">
        <input className="w-full p-2 rounded-md border-stone-0 outline-none text-stone-600 border-2 bg-stone-0" placeholder="Tour name" type="text" id="name" value={(!name && nameChange <= 0) ? nameStr : name} onChange={(e) => {
          setNameChange((nameChange) => nameChange + 1)
          setName(() => e.target.value)
        }} />
        <input className="w-full p-2 rounded-md border-stone-0 outline-none text-stone-600 border-2 bg-stone-0" placeholder="Where to?" type="text" id="where" value={(!where && whereChange <= 0) ? whereStr : where} onChange={(e) => {
          setWhereChange((whereChange) => whereChange + 1)
          setWhere(e.target.value)
        }} />
        <DatePicker selectsMultiple className="px-0 " customInput={<div className="flex gap-2 w-full items-center justify-start py-1 px-2 ">
          <span className="cursor-pointer">
            <HiCalendarDays className="text-stone-600 text-2xl" />
          </span>
          <input id="when" placeholder={'Date'} className="w-full bg-stone-0 py-2 text-stone-600" type="text" value={(!whenDate && dateChange <= 0) ? whenStr : whenDate} disabled />
        </div>} selected={!whenDate ? new Date() : new Date(whenDate)} onChange={(date) => {
          const dateStr = date?.[0]!.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' })
          setDateChange((dateChange) => dateChange + 1)
          setWhenDate(() => dateStr)
        }}
        />
      </div>
      <div className="mt-4 px-3 flex flex-col gap-2">
        <Heading type="heading-4">Filter by price</Heading>
        <div>
          <input className="w-full" type="range" defaultValue={0} value={(!price && priceChange <= 0) ? priceRange || 0 : price} step={500} min={0} max={10000} name="" id=""
            onChange={(e) => {
              setPriceChange((priceChange) => priceChange + 1)
              setPrice(+e.target.value)
            }
            } />
          <p className="text-sm text-stone-500">Price:
            <span> 0$</span>
            <span> - </span>
            <span>{price || priceRange || 0}$</span>
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button type="brand">Search now</Button>
      </div>
    </form>
  </>


  return (
    <Form type="search1" onSubmit={onSubmit}>
      <FormItem type="search" label={'Where to?'} labelFor="where" errorMsg={errors.where?.message}>
        <input value={where} onChange={(e) => setWhere(e.target.value)} className="w-full outline-none focus:border-b-2 focus:border-stone-600 border-b-2 border-stone-0 transition-all duration-[600ms] ease-in-out bg-stone-0 py-1" type="text" id="where" placeholder={'Where you are going?'} />
      </FormItem>

      <FormItem type="search" label={'When?'} labelFor="when" errorMsg={errors.when?.message}>
        <DatePicker selectsMultiple className="px-0 " customInput={<div className="flex gap-2 w-40 items-center justify-start py-1">
          <span className="cursor-pointer">
            <HiCalendarDays className="text-stone-600 text-2xl" />
          </span>
          <input id="when" placeholder={'When you are going?'} className="w-full bg-stone-0 " type="text" value={!whenDate ? '' : whenDate} disabled />
        </div>} selected={!whenDate ? new Date() : new Date(whenDate)} onChange={(date) => {
          const dateStr = date?.[0]!.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' })
          setWhenDate(() => dateStr)
        }}
        />
      </FormItem>

      <FormItem type="search" label={'Type of tour'} labelFor="type" errorMsg={errors.type?.message}>
        <select id="type" className="text-stone-700 focus:outline-stone-400 px-0 py-1" onChange={(e) => setType(e.target.value)}>
          <option value="">Choose tour type</option>
          <option value="group">Group</option>
          <option value="private">Private</option>
          <option value="personal">Personal</option>
        </select>
      </FormItem>
      <Button type="search">
        <HiMagnifyingGlass className="text-3xl text-stone-50" />
      </Button>
      {/* <button type="submit">Search</button> */}
    </Form >
  )
}
