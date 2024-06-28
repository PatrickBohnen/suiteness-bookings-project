export const useFormatExpandBookingData = (checkInDate:string, checkOutDate:string, totalCost: number, currencyCode:string) => {
    const stayDuration = (checkInDate:string, checkOutDate:string) => {
      return (new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (24 * 60 * 60 * 1000) as number
    }
    const formatCurrency = (totalCost:number, currencyCode:string) => {
      let unitSymbol;
      let formattedTotal;
      switch(currencyCode.toLowerCase()) {
        case "usd":
          unitSymbol = "$";
          formattedTotal = (totalCost / 100).toFixed(2);
          break;
        case "cad":
          unitSymbol = "CA$";
          formattedTotal = (totalCost / 100).toFixed(2);
          break;
        case "mxn":
          unitSymbol = "Mex$";
          formattedTotal = (totalCost / 100).toFixed(2);
          break;
        case "jpy":
          unitSymbol = "¥";
          formattedTotal = totalCost;
          break;
        case "gbp":
          unitSymbol = "£";
          formattedTotal = (totalCost / 100).toFixed(2);
          break;
        case "eur":
          unitSymbol = "€";
          formattedTotal = (totalCost / 100).toFixed(2);
          break;
        default:
          unitSymbol = "ERR: unknown currency :";
          formattedTotal = totalCost;
      }
      return `${unitSymbol}${formattedTotal}` as string
    }
    return {
        stayDuration: stayDuration(checkInDate, checkOutDate),
        formatedCurrency: formatCurrency(totalCost, currencyCode)
    }
  }