import Heading from "../Heading";

export default function Services() {
  return (
    <div className="py-12 px-36 [&>h1]:justify-center flex flex-col gap-12 text-center bg-stone-0">
      <Heading type="secondary">We Offer Best Services</Heading>
      <ul className="flex gap-6">
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4">🙋‍♂️</div>
          <Heading type="heading-4">Guided Tours</Heading>
          <p className="text-sm text-stone-600">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </li>
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4">🙋‍♂️</div>
          <Heading type="heading-4">Guided Tours</Heading>
          <p className="text-sm text-stone-600">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </li>
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4">🙋‍♂️</div>
          <Heading type="heading-4">Guided Tours</Heading>
          <p className="text-sm text-stone-600">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </li>
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4">🙋‍♂️</div>
          <Heading type="heading-4">Guided Tours</Heading>
          <p className="text-sm text-stone-600">sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </li>
      </ul>
    </div>
  )
}
