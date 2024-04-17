import Verify2FAForm from "../../features/auth/Verify2FAForm";

export default function Verify2FA() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-002.jpg")` }}
      className="flex h-screen flex-col items-center gap-6 bg-cover p-12"
    >
      <h2 className="text-3xl font-bold text-stone-100">
        Please verify your 2FA
      </h2>
      <Verify2FAForm />
    </div>
  );
}
