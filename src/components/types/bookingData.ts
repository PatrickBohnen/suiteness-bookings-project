export type bookingsOverviewDataType = {
    cancelled: boolean,
    checkInDate: string,
    checkOutDate: string,
    currencyCode: string,
    hotelName: string,
    id: number,
    occupancy: number,
    paid: boolean,
    total: number
}

export type individualBookingDataType = {
    cancelledAt: null | string,
    checkInDate: string,
    createdAt: string,
    checkOutDate: string,
    currencyCode: string,
    customer: {
        bookingIds: number[],
        email: string,
        firstName: string,
        id: number,
        lastName: string
    },
    hotel: {
        id: number,
        name: string
    },
    id: number,
    occupancy: number,
    notes: null | string,
    paidInFullAt: null | string,
    room: {
        id: number,
        maxUnits: number,
        maxOccupancy: number,
        name: string
    },
    total: number,
    updatedAt: string
}

