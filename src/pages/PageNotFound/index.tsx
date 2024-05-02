import Logo from "../../layouts/Logo";
import Heading from "../../components/Heading";
import ButtonLink from "../../components/ButtonLink";

export default function PageNotFound() {
  return (
    <div className="h-screen text-stone-700">
      <nav className="flex items-center justify-between px-12 py-4 thin:max-tiny:px-6">
        <Logo />
        <ButtonLink type="simple" href="/contact">
          Contact us
        </ButtonLink>
      </nav>
      <div className="xl:px-72 py-12 thin:max-tiny:px-6 tiny:max-sm:px-24 sm:max-lg:px-[14rem] lg:px-60">
        <Heading type="secondary">
          Whoops! 😲 It appears you've stumbled upon a page that doesn't exist.
        </Heading>
        <p className="mt-6 text-lg leading-6 text-stone-500">
          Let's find you a real page to explore
        </p>
        <p className="flex gap-2 text-[18rem] leading-[18rem]">
          <span>404</span>
        </p>
      </div>
    </div>
  );
}
