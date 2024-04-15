import ForgotPasswordForm from "../../features/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-002.jpg")` }}
      className="flex h-screen flex-col items-center gap-6 bg-cover p-12"
    >
      <h2 className="text-3xl font-bold text-stone-100">
        Forget your password?
      </h2>
      <ForgotPasswordForm />
    </div>
  );
}
