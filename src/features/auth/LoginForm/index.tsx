import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import Button from "../../../components/Button";
import Form from "../../../components/form/Form";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import ButtonLink from "../../../components/ButtonLink";
import { getGoogleOauthUrl } from "../../../utils";
import { Link } from "react-router-dom";
import { FormEventHandler, useState } from "react";
import { login } from "../../../services/authApiService";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler: FormEventHandler<HTMLFormElement> = function (e) {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Form type="login" onSubmit={loginHandler}>
      <FormItem type="login" label="Email" labelFor="email">
        <Input
          type="text"
          variant="login"
          required={true}
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormItem>
      <FormItem type="login" label="Password" labelFor="password">
        <Input
          type="password"
          variant="login"
          required={true}
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <ButtonLink type="simple">
        <Link to="/forgot-password">Forget the password?</Link>
      </ButtonLink>
      <p className="flex justify-center gap-1 text-sm text-inherit">
        <span>You don't have account yet, </span>
        <ButtonLink type="simple">
          <Link to="/signup">Sign up</Link>
        </ButtonLink>
      </p>
    </Form>
  );
}
