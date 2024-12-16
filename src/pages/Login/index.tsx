import { useTranslation } from "react-i18next";
import LoginForm from "../../features/auth/LoginForm";
// import Button from "../../components/Button";
// import Modal from "../../components/Modal";

export default function Login() {
  const { t } = useTranslation()
  return (
    <div
      style={{ backgroundImage: `url("https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?t=st=1734316387~exp=1734319987~hmac=0e78321974ed70cf8cef99810b988000b120f09f1e3063ffb584bc03de2bb850&w=2000")` }}
      className="flex h-screen flex-col items-center justify-center gap-6 rounded-l-[20%] thin:max-tiny:rounded-l-[0%] bg-cover px-12 object-cover [&>form]:opacity-90"
    >
      <h2 className="text-3xl font-bold text-stone-100">{t('login.form.heading')}</h2>
      <LoginForm />
      {/* <Modal>
        <Modal.Open openName="login"><Button type="primary">Open</Button></Modal.Open>
        <Modal.Window name="login">
          <div>Hello</div>
        </Modal.Window>
      </Modal> */}
    </div>
  );
}
