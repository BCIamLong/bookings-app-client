import { SubmitHandler, useForm } from "react-hook-form";
import { HiCalendarDays, HiMagnifyingGlass } from "react-icons/hi2";

import Button from "@/components/Button";
import Form from "@/components/form/Form";
import FormItem from "@/components/form/FormItem";
import Input from "@/components/form/Input";
import { SearchTour } from "@/interfaces";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function SearchForm() {
  const { formState, handleSubmit, register, reset } = useForm<SearchTour>()
  const { errors } = formState
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [whenDate, setWhenDate] = useState('')

  const onSubmit: SubmitHandler<SearchTour> = function (data) {
    if (Object.keys(data).length <= 0) return navigate('/cabins')
    const { where, when, type } = data
    const options = {} as SearchTour;
    if (where) options.where = where
    if (when) options.when = when
    if (type) options.type = type

    navigate(`/cabins?search=${encodeURIComponent(JSON.stringify(options))}`)
    reset()
  }


  return (
    <Form type="search1" onSubmit={handleSubmit(onSubmit)}>
      <FormItem type="search" label={'Where to?'} labelFor="where" errorMsg={errors.where?.message}>
        <Input
          variant="search1"
          id="where"
          placeholder={'Where you are going?'}
          type="text"
          registerOb={register('where', { required: true })}
        />
      </FormItem>

      <FormItem type="search" label={'When?'} labelFor="when" errorMsg={errors.when?.message}>
        <DatePicker className="px-0 " customInput={<div className="flex gap-2 w-40 items-center justify-start py-1">
          <span className="cursor-pointer">
            <HiCalendarDays className="text-stone-600 text-2xl" />
          </span>
          <input id="when" placeholder={'When you are going?'} className="w-full bg-stone-0 " type="text" value={!whenDate ? 'Date' : whenDate} disabled {...register('when', { required: true })} />
        </div>} selected={new Date()} onChange={(date) => {
          const dateStr = date!.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' })
          setWhenDate(dateStr)
        }}
        />
      </FormItem>

      <FormItem type="search" label={'Type of tour'} labelFor="type" errorMsg={errors.type?.message}>
        <select id="type" className="text-stone-700 focus:outline-stone-400 px-0 py-1" {...register('type', { required: true })}>
          <option>Group</option>
          <option>Private</option>
          <option>Personal</option>
        </select>
      </FormItem>
      <Button type="search">
        <HiMagnifyingGlass className="text-3xl text-stone-50" />
      </Button>
    </Form >
  )
}
