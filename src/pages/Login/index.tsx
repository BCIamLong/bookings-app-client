import LoginForm from "../../features/auth/LoginForm";
// import Button from "../../components/Button";
// import Modal from "../../components/Modal";

export default function Login() {
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-008.jpg")` }}
      className="flex h-screen flex-col items-center justify-center gap-6 rounded-l-[20%] thin:max-tiny:rounded-l-[0%] bg-cover px-12"
    >
      <h2 className="text-3xl font-bold text-stone-100">Have an account?</h2>
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
