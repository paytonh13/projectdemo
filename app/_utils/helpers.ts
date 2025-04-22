export const windowOpen = (url: string, target: "_self" | "_blank" = "_self") => {
  window.open(url, target);
}

export function classNames(...classes: any): string {
  return classes.filter(Boolean).join(" ");
}

export function isString(value: any): value is string {
  return typeof value === "string";
}

export const moneyFormatter = Intl.NumberFormat("en-ES", {
  currency: "USD",
  currencyDisplay: "symbol",
  currencySign: "standard",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  minimumIntegerDigits: 1,
});
