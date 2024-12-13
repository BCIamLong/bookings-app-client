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
import { usePost } from "../usePost";
import Spinner from "@/components/Spinner";
import { IPost, ITour } from "@/interfaces";
import { FormEvent, useState } from "react";
import { useUpdatePost } from "../useUpdatePost";
import { toast } from "react-toastify";

export default function EditPost() {
  const { post, isLoading } = usePost()
  const { title: postTitle, description, tourId, images, _id: postId } = post as IPost || {}
  const { t } = useTranslation()
  const [content, setContent] = useState(description)
  const [title, setTitle] = useState(postTitle)
  const [image, setImage] = useState<File>()
  const { updatePost, isUpdating } = useUpdatePost({ id: postId })

  const { name } = tourId as unknown as ITour || {}

  const handleSubmit = function (e: FormEvent) {
    e.preventDefault()

    const form = new FormData();
    if (content !== description && content) form.append('description', content)
    if (title !== postTitle && title) form.append('title', title)
    if (image)
      form.append('image', image)



    // console.log(image)
    updatePost(form as unknown as { data: Partial<IPost> }, {
      onSuccess: () => toast.success('Update post successfully')
    })
  }

  if (isLoading) return <Spinner size="big" />
  return (
    <form className="flex gap-6 flex-col pb-12 pt-4" method="post" onSubmit={handleSubmit} encType="multipart/form-data">
      <Heading type="secondary">
        <LuImagePlus />
        <span>Edit post</span>
      </Heading>
      <div className="flex flex-col gap-3 bg-stone-300 rounded-lg">
        <Select id="sort" type="sort" disabled>
          <Option type="sort" value="none">{name}</Option>
        </Select>
      </div>
      <div className={`[&>textarea]:w-full flex gap-3 flex-col `}>
        <Heading type="heading-4">Title</Heading>
        <input className="py-2 border-[1.5px] border-stone-300 rounded-lg focus:outline-stone-400 text-stone-600 px-3" type="text" disabled={isUpdating} value={title || postTitle} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="[&>textarea]:w-full flex gap-3 flex-col">
        <Heading type="heading-4">Content</Heading>
        <Textarea type="posts" id="" disabled={isUpdating} value={content || description} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div className="flex gap-3 flex-col">
        <Heading type="heading-4">Edit photos</Heading>
        <div style={{ backgroundImage: `url(${images[0]})` }} className="bg-cover bg-center [&>input]:w-[30%] gap-3 border-[1.5px] border-stone-300 py-12 flex-col rounded-lg flex justify-center items-center">
          <div className="flex">
            <LuImage className="text-6xl text-stone-500  -rotate-6" />
            <LuImage className="text-6xl text-stone-500 rotate-[20deg] -mt-3" />
          </div>
          <p className="text-lg text-stone-600 font-semibold">Drag photo here</p>
          <p className="text-sm text-stone-400">SVG, PNG, JPG</p>
          <div className="flex justify-center [&>input]:w-[80%]">
            <input id="image" className="file:duration-300 file:transition-all hover:file:cursor-pointer hover:file:bg-brand-700 file:border-none file:bg-brand-600 file:text-stone-100 file:px-3 file:py-2 file:rounded-lg file:font-semibold text-sm file:mr-3 text-stone-700 w-[24%] border-none thin:max-tiny:w-[35%] tiny:max-sm:w-[40%] sm:max-md:w-[33%] md:max-lg:w-[28%]" type="file" disabled={isUpdating} onChange={(e) => setImage(e.target.files[0])} />
          </div>
        </div>
      </div>
      <Buttons>
        <Button type="secondary">Cancel</Button>
        <Button type="brand">{
          isUpdating ? <Spinner size="small" /> :
            'Edit Post'
        }</Button>
      </Buttons>
    </form>
  )
}

