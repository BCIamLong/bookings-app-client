import SignUpForm from "../../features/auth/SignUpForm";

export default function SignUp() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-006.jpg")` }}
      className="flex h-screen flex-col items-center justify-center gap-6 rounded-l-[20%] bg-cover px-12"
    >
      <h2 className="text-3xl font-bold text-stone-100">
        Create your new account
      </h2>
      <SignUpForm />
    </div>
  );
}
