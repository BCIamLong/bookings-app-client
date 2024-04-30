import { SubmitHandler, useForm } from "react-hook-form";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Button from "@/components/Button";
import Form from "@/components/form/Form";
import FormItem from "@/components/form/FormItem";
import Input from "@/components/form/Input";
import { SearchCabin } from "@/interfaces";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  const { formState, handleSubmit, register, reset } = useForm<SearchCabin>()
  const { errors } = formState
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SearchCabin> = function (data) {
    if (Object.keys(data).length <= 0) return navigate('/cabins')
    const { discount, maxCapacity, ratingAverage, regularPrice } = data
    const options = {} as SearchCabin;
    if (discount) options.discount = discount
    if (maxCapacity) options.maxCapacity = maxCapacity
    if (ratingAverage) options.ratingAverage = ratingAverage
    if (regularPrice) options.regularPrice = regularPrice

    navigate(`/cabins?search=${encodeURIComponent(JSON.stringify(options))}`)
    reset()
  }


  return (
    <Form type="search" onSubmit={handleSubmit(onSubmit)}>
      <FormItem type="search" label="Price" labelFor="regularPrice" errorMsg={errors.regularPrice?.message}>
        <Input
          variant="search"
          id="regularPrice"
          placeholder="Which price do you prefer?"
          type="number"
          registerOb={register('regularPrice', { min: { value: 0, message: 'Price must be positive number' } })}
        />
      </FormItem>

      <FormItem type="search" label="Rating" labelFor="rating" errorMsg={errors.ratingAverage?.message}>
        <Input
          variant="search"
          id="rating"
          placeholder="Add ratings"
          type="number"
          registerOb={register('ratingAverage', { min: { value: 1, message: 'Rating must be greater or equal 1' }, max: { value: 5, message: 'Rating must be lower or equal 5' } })}
        />
      </FormItem>

      <FormItem type="search" label="Discount" labelFor="discount" errorMsg={errors.discount?.message}>
        <Input
          variant="search"
          id="discount"
          placeholder="Add discount"
          type="number"
          registerOb={register('discount', { min: { value: 0, message: 'Discount must be positive number' }, max: { value: 50, message: 'Discount must be lower or equal 50 (%)' } })}
        />
      </FormItem>

      <FormItem type="search" label="Guests" labelFor="guests" errorMsg={errors.maxCapacity?.message}>
        <Input
          variant="search"
          id="guests"
          placeholder="Add guests"
          type="number"
          registerOb={register('maxCapacity', { min: { value: 1, message: 'Guests must be greater than 1' } })}
        />
      </FormItem>

      <Button type="search">
        <HiMagnifyingGlass className="text-3xl text-stone-50" />
      </Button>
    </Form>
  )
}
