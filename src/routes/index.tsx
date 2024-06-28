import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$
} from "@builder.io/qwik-city";
import { BookingOverview } from "~/components/bookingOverviewEntry";
import type { bookingsOverviewDataType } from "~/components/types/bookingData";



export const useFetchBookingsOverview = routeLoader$(async (requestEvent) => {
  const res = await fetch(`${requestEvent.env.get('api_url')}/bookings`, {
    headers: {
      'x-api-key': requestEvent.env.get('api_key')
    }
  });
  const bookings = await res.json() as bookingsOverviewDataType[]; 

  return bookings
});

export default component$(() => {
  const bookingsOverview = useFetchBookingsOverview();

  return (
    <div class="flex flex-col items-center">
      <h1 class="text-4xl font-bold mb-6 max-w-screen-lg w-full">Bookings</h1>
      <table class="bg-gray-200 text-gray-900 overflow-scroll text-center w-full max-w-screen-lg">
        <thead>
          <th class="border-solid border-2 border-gray-900 p-2">Booking Id</th>
          <th class="border-solid border-2 border-gray-900 p-2">Paid</th>
          <th class="border-solid border-2 border-gray-900 p-2">Cancelled</th>
          <th class="border-solid border-2 border-gray-900 p-2">Total Cost</th>
          <th class="border-solid border-2 border-gray-900 p-2">Check-in Date</th>
          <th class="border-solid border-2 border-gray-900 p-2">Check-out Date</th>
          <th class="border-solid border-2 border-gray-900 p-2">Nights</th>
          <th class="border-solid border-2 border-gray-900 p-2">Hotel</th>
          <th class="border-solid border-2 border-gray-900 p-2">Occupancy</th>
        </thead>
        <tbody>
        {bookingsOverview.value.map(({ cancelled, checkInDate, checkOutDate, currencyCode, hotelName, id, occupancy, paid, total }) => (
            <tr key={id}>
              <BookingOverview cancelled={cancelled} checkInDate={checkInDate} checkOutDate={checkOutDate} currencyCode={currencyCode} hotelName={hotelName} id={id} occupancy={occupancy} paid={paid} total={total} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sample Bookings Project",
  meta: [
    {
      name: "description",
      content: "A quick project to demonstrate Qwik and Tailwind",
    },
  ],
};

