import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ButtonLink from "../../components/ButtonLink";
import Form from "../../components/form/Form";
import FormItem from "../../components/form/FormItem";
import Input from "../../components/form/Input";

export default function SignUp() {
  return (
    <div className="flex h-screen flex-col items-center gap-6 p-12">
      <h2 className="text-3xl font-bold text-stone-700">
        Create your new account
      </h2>
      <Form type="login">
        <FormItem type="login" label="Full name" labelFor="fullName">
          <Input
            type="text"
            variant="login"
            required={true}
            id="fullName"
            placeholder="Enter your full name"
          />
        </FormItem>
        <FormItem type="login" label="Email" labelFor="email">
          <Input
            type="email"
            required={true}
            variant="login"
            id="email"
            placeholder="Enter your email"
          />
        </FormItem>
        <FormItem type="login" label="Password" labelFor="password">
          <Input
            type="password"
            required={true}
            variant="login"
            id="password"
            placeholder="••••••••"
          />
        </FormItem>
        <FormItem
          type="login"
          label="Password confirm"
          labelFor="passwordConfirm"
        >
          <Input
            type="passwordConfirm"
            required={true}
            variant="login"
            id="passwordConfirm"
            placeholder="••••••••"
          />
        </FormItem>
        <Button type="login">Login</Button>
        <p className="flex justify-center gap-1 text-sm text-inherit">
          <span>You're already have account, </span>
          <ButtonLink type="simple">
            <Link to="/login">Login</Link>
          </ButtonLink>
        </p>
      </Form>
    </div>
  );
}
