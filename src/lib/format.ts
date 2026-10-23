// Shows the starting price as "From ₱19,133,045" from the plain number entered in the CMS.
export function formatPrice(priceFrom: number): string {
  return `From ₱${Math.round(priceFrom).toLocaleString("en-US")}`;
}
