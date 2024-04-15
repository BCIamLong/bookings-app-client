import SignUpForm from "../../features/auth/SignUpForm";

export default function SignUp() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-006.jpg")` }}
      className="flex h-screen flex-col items-center gap-6 bg-cover p-12"
    >
      <h2 className="text-3xl font-bold text-stone-100">
        Create your new account
      </h2>
      <SignUpForm />
    </div>
  );
}