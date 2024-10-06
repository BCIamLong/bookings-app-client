import Button from "@/components/Button";
import Buttons from "@/components/Buttons";
import FileInput from "@/components/form/FileInput";
import Textarea from "@/components/form/Textarea";
import Heading from "@/components/Heading";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { useTranslation } from "react-i18next";
import { LuImage, LuImagePlus } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

export default function EditPost() {
  const [searchPrams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()
  return (
    <div className="flex gap-6 flex-col pb-12 pt-4">
      <Heading type="secondary">
        <LuImagePlus />
        <span>Edit post</span>
      </Heading>
      <div className="flex flex-col gap-3">
        <Select id="sort" type="sort" onChange={(e) => setSearchParams(params => {
          params.set('sort', e.target.value)
          return params
        })}>
          <Option type="sort" value="none">Choose your booked tour</Option>
          <Option type="sort" value="latest">Tour 1</Option>
          <Option type="sort" value="oldest">{t('cabins.default.sort.time-des')}</Option>
          <Option type="sort" value="name-low">{t('cabins.default.sort.name-ins')}</Option>
          <Option type="sort" value="name-high">{t('cabins.default.sort.name-des')}</Option>
          <Option type="sort" value="price-low">{t('cabins.default.sort.price-ins')}</Option>
          <Option type="sort" value="price-high">{t('cabins.default.sort.price-des')}</Option>
        </Select>
      </div>
      <div className="[&>textarea]:w-full flex gap-3 flex-col">
        <Heading type="heading-4">Content</Heading>
        <Textarea type="posts" id="" />
      </div>
      <div className="flex gap-3 flex-col">
        <Heading type="heading-4">Add photos</Heading>
        <div className=" [&>input]:w-[30%] gap-3 border-[1.5px] border-stone-300 py-12 flex-col rounded-lg flex justify-center items-center">
          <div className="flex">
            <LuImage className="text-6xl text-stone-500  -rotate-6" />
            <LuImage className="text-6xl text-stone-500 rotate-[20deg] -mt-3" />
          </div>
          <p className="text-lg text-stone-600 font-semibold">Drag photo here</p>
          <p className="text-sm text-stone-400">SVG, PNG, JPG</p>
          <div className="flex justify-center [&>input]:w-[80%]">
            <FileInput id="" variant="posts" />
          </div>
        </div>
      </div>
      <Buttons>
        <Button type="secondary">Cancel</Button>
        <Button type="brand">Edit Post</Button>
      </Buttons>
    </div>
  )
}

