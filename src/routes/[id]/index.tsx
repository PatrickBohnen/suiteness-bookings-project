import {
    component$,
  } from "@builder.io/qwik";
  import { 
    type DocumentHead,
    routeLoader$
  } from "@builder.io/qwik-city";
  import { useFormatExpandBookingData } from "~/components/hooks/useFormatExpandBookingData";
  import type { individualBookingDataType } from "~/components/types/bookingData";

  
  
  export const useFetchIndividualBooking = routeLoader$(async (requestEvent) => {
    const res = await fetch(`${requestEvent.env.get('api_url')}/bookings/${requestEvent.params.id}`, {
      headers: {
        'x-api-key': requestEvent.env.get('api_key')
      }
    })
    const individualBookingData = await res.json() as individualBookingDataType;


    return individualBookingData
  });

  export default component$(() => {
    
    const bookingData = useFetchIndividualBooking();
    const formattedData = useFormatExpandBookingData(bookingData.value.checkInDate, bookingData.value.checkOutDate, bookingData.value.total, bookingData.value.currencyCode);

    return (
      <>
        <h1 class="text-4xl font-bold mb-6">Booking: {bookingData.value.id}</h1>
        <div class="flex flex-col lg:flex-row leading-normal">
          <div class="bg-gray-200 text-gray-900 p-4 lg:w-1/2 lg:mr-4" >
            <div class="flex justify-between pb-2 mb-4 border-b border-solid border-gray-900">
              <h2 class="font-bold w-auto py-2">Booking Information</h2>
              <div class="flex w-auto">
                {bookingData.value.paidInFullAt ? (
                  <p class="p-2 bg-green-700 text-white text-sm font-bold">Paid in Full</p>
                ) : (
                  <p class="p-2 bg-gray-300 text-gray-900 text-sm font-bold">Awaiting Payment</p>
                ) }
                {bookingData.value.paidInFullAt ? (
                  <p class="p-2 bg-red-700 text-white text-sm font-bold ml-2">Cancelled</p>
                ) : (
                  <p class="p-2 bg-green-700 text-white text-sm font-bold ml-2">Confirmed</p>
                ) }
              </div>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Booking Id: {bookingData.value.id}</p>
              <p class="w-1/2">Created: {bookingData.value.createdAt}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Occupants: {bookingData.value.occupancy}</p>
              <p class="w-1/2">Updated: {bookingData.value.updatedAt}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Check-in: {bookingData.value.checkInDate}</p>
              <p class="w-1/2">Check-out: {bookingData.value.checkOutDate}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Nights: {formattedData.stayDuration} Night{formattedData.stayDuration > 1 ? 's' : ''}</p>
              <p class="w-1/2">Total Cost: {formattedData.formatedCurrency}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Paid in Full: {bookingData.value.paidInFullAt ? (<>{`Yes at ${bookingData.value.paidInFullAt}`}</>) : 'No' } </p>
              <p class="w-1/2">Cancelled: {bookingData.value.cancelledAt ? (<>{`Yes at ${bookingData.value.cancelledAt}`}</>) : 'No' } </p>
            </div>
            {bookingData.value.notes ? (
              <div class="flex my-2">
                <p>Notes: {bookingData.value.notes}</p>
              </div>
            ) : null}
            <h2 class="font-bold w-auto pb-2 mt-8 mb-4 border-b border-solid border-gray-900">Hotel & Room Information</h2>
            <div class="flex my-2">
              <p class="w-1/2">Hotel Name: {bookingData.value.hotel.name}</p>
              <p class="w-1/2">Hotel Id: {bookingData.value.hotel.id}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Room Name: {bookingData.value.room.name}</p>
              <p class="w-1/2">Room Id: {bookingData.value.room.id}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Room Max Occupancy: {bookingData.value.room.maxOccupancy}</p>
              <p class="w-1/2">Room Max Units: {bookingData.value.room.maxUnits}</p>
            </div>
          </div>
          <div class="bg-gray-200 text-gray-900 p-4 mt-8 lg:mt-0 lg:w-1/2 lg:ml-4 " >
            <h2 class="font-bold w-auto pb-4 mt-2 mb-4 border-b border-solid border-gray-900">Customer Information</h2>
            <div class="flex my-2">
              <p class="w-1/2">First Name: {bookingData.value.customer.firstName}</p>
              <p class="w-1/2">Last Name: {bookingData.value.customer.lastName}</p>
            </div>
            <div class="flex my-2">
              <p class="w-1/2">Email: {bookingData.value.customer.email}</p>
              <p class="w-1/2">Customer Id: {bookingData.value.customer.id}</p>
            </div>
            <div class="flex my-2">
              <p>Additional Bookings: {bookingData.value.customer.bookingIds.map((id) => (
                <span key={id}> <a class="underline"  href={`/${id}`}>{id}</a>,</span>
            ))}</p>
            </div>
          </div>
        </div>
      </>
    );
  });

  export const head: DocumentHead = ({resolveValue}) => {
    const bookingData = resolveValue(useFetchIndividualBooking);
    return {
      title: `Booking: ${bookingData.id}`,
    };
  };