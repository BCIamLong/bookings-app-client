import ResetPasswordForm from "../../features/auth/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-007.jpg")` }}
      className="flex h-screen flex-col items-center gap-6 bg-cover p-12 rounded-l-[20%]"
    >
      <h2 className="text-3xl font-bold text-stone-100">Reset your password</h2>
      <ResetPasswordForm />
    </div>
  );
}
