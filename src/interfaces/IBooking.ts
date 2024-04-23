import ICabin from "./ICabin";

export interface BookCabin {
  cabinId: string;
  regularPrice: number;
  name: string;
  description: string;
  image: string;
}

export default interface IBooking {
  _id: string;
  cabinId: string | ICabin;
  guestId: string;
  startDate: Date;
  endDate: Date;
  numNights: number;
  numGuests: number;
  cabinPrice: number;
  extrasPrice: number;
  totalPrice: number;
  status?: string;
  hasBreakfast?: boolean;
  isPaid?: boolean;
  observation: string;
  createdAt: Date;
  updatedAt: Date;
}
