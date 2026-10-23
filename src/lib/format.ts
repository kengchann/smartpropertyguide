// Shows the starting price as "From ₱19,133,045" from the plain number entered in the CMS.
export function formatPrice(priceFrom: number): string {
  return `From ₱${Math.round(priceFrom).toLocaleString("en-US")}`;
}

// A bare number becomes "1 Bedroom" / "2 Bedrooms" (0 = "Studio"); any other text is shown as typed.
export function formatBedrooms(value: string): string {
  const v = value.trim();
  if (!/^\d+$/.test(v)) return v;
  const n = Number(v);
  if (n === 0) return "Studio";
  return `${n} ${n === 1 ? "Bedroom" : "Bedrooms"}`;
}
