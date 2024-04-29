import { Outlet } from "react-router-dom";
import Logo from "../Logo";
import Heading from "../../components/Heading";
import ButtonLink from "../../components/ButtonLink";

export default function LoginLayout() {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] bg-stone-0">
      <div className="flex flex-col justify-center gap-16 p-6 bg-stone-0">
        <Logo size="big" />
        <div className="flex flex-col gap-7">
          <Heading type="secondary">
            Let's embark on a journey of stress-free bookings together
          </Heading>
          <p className="text-sm leading-6 text-stone-600">
            Booking App is a user-friendly booking platform designed to simplify
            the process of planning and booking various services and
            experiences. Whether you're looking to book flights, accommodations,
            activities, or events, [App Name] provides a seamless and convenient
            solution for all your booking needs.
          </p>
          <div className="w-[42%]">
            <ButtonLink type="primary" size="medium" href="/">
              Start your journey
            </ButtonLink>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
