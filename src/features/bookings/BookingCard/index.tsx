import Heading from "../../../components/Heading";

export default function BookingCard() {
  const classStyle = `flex justify-between items-center [&>span:first-child]:text-stone-500 [&>span:nth-child(2)]:text-brand-600 [&>span:nth-child(2)]:font-semibold`
  return (
    <div className="p-8 w-[40%] shadow-md shadow-brand-300 rounded-md text-stone-700">
      <div className="border-b-[1.5px] pb-3">
        <Heading type="tertiary">Name of cabin</Heading>
      </div>
      <ul className="flex flex-col gap-3 mt-3">
        <li className={classStyle}>
          <span>Payment time:</span> <span>September 20, 2023, 14:35</span>
        </li>
        <li className={classStyle}><span>Payment method:</span> <span>Credit Card (Visa)</span></li>
        <li className={classStyle}><span>Sender name:</span> <span>John Smith</span></li>
        <li className={classStyle}><span>Amount:</span> <span>$500.00</span></li>
        <li className={classStyle}><span>Other fee:</span> <span>$15.00</span></li>
        <li className={classStyle}><span>Total amount:</span> <span>$515.00</span></li>
      </ul>
    </div>
  )
}
