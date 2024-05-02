import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Buttons from "../../../components/Buttons";
import Heading from "../../../components/Heading";
import Option from "../../../components/Option";
import Select from "../../../components/Select";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import { DeleteMeInput } from "../../../interfaces";
import { useDeleteMe } from "../useDeleteMe";
import Spinner from "../../../components/Spinner";
import { HiXMark } from "react-icons/hi2";
// import Modal from "../../../components/Modal";

export default function DeleteMeForm() {
  const { formState, register, handleSubmit } = useForm<DeleteMeInput>()
  const { errors } = formState
  const { isDeleting, deleteMe } = useDeleteMe()

  const onSubmit: SubmitHandler<DeleteMeInput> = function (data) {
    // console.log(data)
    deleteMe(data)
  }

  return <Form type="profile" onSubmit={handleSubmit(onSubmit)}>
    <div className="border-b-[1.5px] border-stone-300 py-2">
      <Heading type="heading-4">Delete your account</Heading>
    </div>
    <div className="text-xs text-stone-500 flex flex-col gap-2">

      <p>Deleting your account gives you full control over your data and privacy. By choosing this option, you permanently remove your information from our platform, ensuring your online presence aligns with your preferences. It's a simple, transparent process designed to empower you</p>
      <p className="mb-1">Your account will be deleted after 30 days, contact us for more information.</p>
      <ButtonLink type="simple" href="#">Contact</ButtonLink>
    </div>

    <FormItem
      type="profile"
      label="Choose delete account reason"
      labelFor="reason"
      errorMsg={errors.reason?.message}
    >
      <Select type="delete-me" id="reason" registerOb={register('reason', { required: 'This field is required' })}>
        <Option type="delete-me" value="reason-1">Bad user experience</Option>
        <Option type="delete-me" value="reason-2">Bad user interface</Option>
      </Select>
    </FormItem>

    <FormItem
      type="profile"
      label="Password"
      labelFor="delete-password"
      errorMsg={errors.password?.message}

    >
      <Input
        type="password"
        variant="profile"
        id="delete-password"
        placeholder="Enter your password"
        registerOb={register("password", {
          required: "This field is required",
          pattern: {
            value: /^(?=.*[a-zA-Z0-9]).{8,}$/,
            message:
              "Password must be at least 8 characters long and contain letters or numbers.",
          },
        })}
      />
    </FormItem>
    <Buttons>
      <Button type="secondary" reset={true} size="medium">
        <span><HiXMark className="stroke-[1.5px]" /></span>
        <span>Cancel</span>
      </Button>
      <Button type="primary" size="medium">
        {isDeleting ? <Spinner size="small" /> : 'Delete'}
      </Button>
    </Buttons>
    {/* <Modal>
      <Modal.Open openName="delete">
        <Button type="primary" size="medium">
          Delete
        </Button>
      </Modal.Open>
      <Modal.Window name="delete">
        <div className="flex flex-col gap-4 w-[33rem] bg-stone-100 py-8 px-8 text-stone-600">
          <Heading type="tertiary">Are you sure to perform this action?</Heading>
          <p>Deleting your account is irreversible. All your data, including  like saved settings, files, messages, etc., will be permanently deleted.</p>

          <p className="text-sm">If you're sure, click "Delete Account"</p>
          <p className="text-sm">To cancel, click "Cancel"</p>
          <p>If you have questions or need assistance, please contact our support team at Booking App.</p>

          <Buttons>
            <Button type="secondary" reset={true} size="medium">
              <span><HiXMark className="stroke-[1.5px]" /></span>
              <span>Cancel</span>
            </Button>
            <Button type="primary" size="medium">
              {isDeleting ? <Spinner size="small" /> : 'Delete'}
            </Button>
          </Buttons>
        </div>
      </Modal.Window>
    </Modal> */}

  </Form>
}