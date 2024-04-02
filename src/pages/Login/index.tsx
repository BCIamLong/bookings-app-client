import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import Button from "../../components/Button";
import Form from "../../components/form/Form";
import FormItem from "../../components/form/FormItem";
import Input from "../../components/form/Input";
import ButtonLink from "../../components/ButtonLink";
import { getGoogleOauthUrl } from "../../utils";

export default function Login() {
  return (
    <div className="flex h-screen flex-col items-center gap-6 p-12">
      <h2 className="text-3xl font-bold text-stone-700">Have an account?</h2>
      <Form type="login">
        <FormItem type="login" label="Email" labelFor="email">
          <Input
            type="text"
            variant="login"
            id="email"
            placeholder="Enter your email"
          />
        </FormItem>
        <FormItem type="login" label="Password" labelFor="password">
          <Input
            type="password"
            variant="login"
            id="password"
            placeholder="••••••••"
          />
        </FormItem>
        <div className="mt-4 flex flex-col gap-3">
          <Button type="login">Login</Button>
          <ButtonLink href={getGoogleOauthUrl()} type="login">
            <HiOutlineEnvelope className="text-2xl" />
            <span>Login with email</span>
          </ButtonLink>
        </div>
        <div className="flex justify-center gap-2">
          <ButtonLink type="login-type">
            <FaFacebook className="text-xl" />
            <span>Facebook</span>
          </ButtonLink>
          <ButtonLink type="login-type">
            <FaApple className="text-xl" />
            <span>Apple ID</span>
          </ButtonLink>
          <ButtonLink type="login-type">
            <FaGoogle className="text-xl" />
            <span>Google</span>
          </ButtonLink>
        </div>
      </Form>
    </div>
  );
}
