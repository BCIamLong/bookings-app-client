import { FallbackProps } from 'react-error-boundary'
import Heading from "../../components/Heading";
import Button from '../Button';


export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="h-screen text-stone-700">
      <nav className="flex items-center justify-between px-12 py-4 thin:max-tiny:px-6">
      </nav>
      <div className="xl:px-72 py-12 thin:max-tiny:px-6 tiny:max-sm:px-24 sm:max-lg:px-[14rem] lg:px-60">
        <Heading type="secondary">
          Something went wrong 🧐
        </Heading>
        <p className="mt-6 text-lg leading-6 text-stone-500 mb-6">
          {import.meta.env.MODE !== 'production' && error?.message}
        </p>
        <Button type='primary' size='big' onClick={resetErrorBoundary}>Try again</Button>
        {/* <p className="flex gap-2 text-[18rem] leading-[18rem]">
          <span>404</span>
        </p> */}
      </div>
    </div>
  );
}
