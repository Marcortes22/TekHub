export const formatCurrency = (value: number, showInThousands = false): string => {
  const adjustedValue = showInThousands ? value / 1000 : value
  const suffix = showInThousands ? "K" : ""

  return (
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: showInThousands ? 1 : 0,
    }).format(adjustedValue) + suffix
  )
}

export const formatNumber = (value: number, showInThousands = false): string => {
  const adjustedValue = showInThousands ? value / 1000 : value
  const suffix = showInThousands ? "K" : ""

  return (
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: showInThousands ? 1 : 0,
    }).format(adjustedValue) + suffix
  )
}

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`
}
