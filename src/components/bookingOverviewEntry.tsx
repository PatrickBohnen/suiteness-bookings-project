import { component$ } from "@builder.io/qwik";
import { useFormatExpandBookingData } from "./hooks/useFormatExpandBookingData";


interface BookingOverviewProps {
    cancelled: boolean;
    checkInDate: string;
    checkOutDate: string;
    currencyCode: string;
    hotelName: string;
    id: number;
    occupancy: number;
    paid: boolean;
    total: number;
  }
  export const BookingOverview = component$((props: BookingOverviewProps) => {
    const formattedData = useFormatExpandBookingData(props.checkInDate, props.checkOutDate, props.total, props.currencyCode)
    return (
      <>
        <td class="border-solid border-2 border-gray-900 p-2">{props.id} - <a class="underline" href={`/${props.id}`} >Details</a></td>
        {props.paid ? (
          <td class="border-solid border-2 border-gray-900 p-2 bg-green-700 text-white text-sm font-bold">PAID</td>
        ) : (
          <td class="border-solid border-2 border-gray-900 p-2"></td>
        )}
        {props.cancelled ? (
          <td class="border-solid border-2 border-gray-900 p-2 bg-red-700 text-white text-sm font-bold">CANCELLED</td>
        ) : (
          <td class="border-solid border-2 border-gray-900 p-2"></td>
        )}
        <td class="border-solid border-2 border-gray-900 p-2">{formattedData.formatedCurrency}</td>
        <td class="border-solid border-2 border-gray-900 p-2">{props.checkInDate}</td>
        <td class="border-solid border-2 border-gray-900 p-2">{props.checkOutDate}</td>
        <td class="border-solid border-2 border-gray-900 p-2">{formattedData.stayDuration}</td>
        <td class="border-solid border-2 border-gray-900 p-2">{props.hotelName}</td>
        <td class="border-solid border-2 border-gray-900 p-2">{props.occupancy}</td>
      </>)
  })