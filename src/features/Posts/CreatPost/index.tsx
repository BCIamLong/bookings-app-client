import Button from "@/components/Button";
import Buttons from "@/components/Buttons";
import FileInput from "@/components/form/FileInput";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import Heading from "@/components/Heading";
import Option from "@/components/Option";
import Select from "@/components/Select";
import Spinner from "@/components/Spinner";
import { useUserSession } from "@/features/auth/useUserSession";
import { useToursToPost } from "@/features/tours/useToursToPost";
import { IPostInput, ITour } from "@/interfaces";
import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuImage, LuImagePlus } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import { useCreatePost } from "../useCreatePost";

export default function CreatePost() {
  const [searchPrams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { _id: userId } = user || {}
  const [tourInd, setTourInd] = useState(0)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File>()
  const { createPost, isCreating } = useCreatePost()

  const { tours, isLoading: isLoadingTour } = useToursToPost()
  const isAllowToPost = tours?.length

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault()
    // console.log({
    //   tourId: tours?.[tourInd]?._id,
    //   content,
    //   title, userId,
    //   image
    // })
    const form = new FormData();
    form.append('tourId', tours?.[tourInd]?._id)
    form.append('description', content)
    form.append('title', title)
    form.append('userId', userId)
    form.append('image', image)

    createPost(form)
  }

  if (isLoadingUser || isLoadingTour) <Spinner size="normal" />

  return (
    <form className="flex gap-6 flex-col pb-12 pt-4 " method="post" onSubmit={handleSubmit} encType="multipart/form-data">
      <Heading type="secondary">
        <LuImagePlus />
        <span>Create post</span>
      </Heading>
      <div className="flex flex-col gap-3">
        <Select id="sort" type="sort" onChange={(e) => setTourInd(+e.target.value)} disabled={!isAllowToPost || isCreating}>
          {tours?.length && <Option type="sort" value="none">Choose your booked tour</Option>}
          {tours?.map((tour: ITour, ind: number) => <Option type="sort" value={`${ind}`}>{tour.name}</Option>
          )}

          {!tours?.length && <Option type="sort" value="none">Please book tour to post</Option>}

        </Select>
      </div>
      <div className={`[&>textarea]:w-full flex gap-3 flex-col ${isAllowToPost ? '' : ''}`}>
        <Heading type="heading-4">Title</Heading>
        <input className="py-2 border-[1.5px] border-stone-300 rounded-lg focus:outline-stone-400 text-stone-600 px-3" type="text" disabled={!isAllowToPost || isCreating} value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={`[&>textarea]:w-full flex gap-3 flex-col ${isAllowToPost ? '' : ''}`}>
        <Heading type="heading-4">Content</Heading>
        <Textarea type="posts" id="" disabled={!isAllowToPost || isCreating} value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className={`flex gap-3 flex-col `}>
        <Heading type="heading-4">Add photos</Heading>
        <div className=" [&>input]:w-[30%] gap-3 border-[1.5px] border-stone-300 py-12 flex-col rounded-lg flex justify-center items-center">
          <div className="flex">
            <LuImage className="text-6xl text-stone-500  -rotate-6" />
            <LuImage className="text-6xl text-stone-500 rotate-[20deg] -mt-3" />
          </div>
          <p className="text-lg text-stone-600 font-semibold">Drag photo here</p>
          <p className="text-sm text-stone-400">SVG, PNG, JPG</p>
          <div className="flex justify-center [&>input]:w-[80%]">
            <input id="image" className="file:duration-300 file:transition-all hover:file:cursor-pointer hover:file:bg-brand-700 file:border-none file:bg-brand-600 file:text-stone-100 file:px-3 file:py-2 file:rounded-lg file:font-semibold text-sm file:mr-3 text-stone-700 w-[24%] border-none thin:max-tiny:w-[35%] tiny:max-sm:w-[40%] sm:max-md:w-[33%] md:max-lg:w-[28%]" type="file" disabled={!isAllowToPost || isCreating} onChange={(e) => setImage(e.target.files[0])} />
            {/* <FileInput id="" variant="posts" disabled={!isAllowToPost} /> */}
          </div>
        </div>
      </div>
      <Buttons>
        <Button type="secondary" disabled={!isAllowToPost || isCreating}>Cancel</Button>
        <Button type="brand" disabled={!isAllowToPost}>{
          isCreating ? <Spinner size="small" /> :
            'Create Post'
        }</Button>
      </Buttons>
    </form>
  )
}
