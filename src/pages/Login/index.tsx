import LoginForm from "../../features/auth/LoginForm";

export default function Login() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-008.jpg")` }}
      className="flex h-screen flex-col items-center gap-6 bg-cover p-12"
    >
      <h2 className="text-3xl font-bold text-stone-100">Have an account?</h2>
      <LoginForm />
    </div>
  );
}
