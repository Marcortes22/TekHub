"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { BarChart } from "@mui/x-charts/BarChart"
import { getMonthlySales } from "../data/mock"
import { formatCurrency } from "../utils/format"

interface BarSalesByProductProps {
  year: string
  showInThousands: boolean
}

export function BarSalesByProduct({ year, showInThousands }: BarSalesByProductProps) {
  const sales = getMonthlySales(year)

  // Group by month and product
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const products = ["Product A", "Product B", "Product C"]

  const chartData = months.map((month) => {
    const monthData = { month }
    products.forEach((product) => {
      const sale = sales.find((s) => s.month === month && s.product === product)
      monthData[product] = sale ? (showInThousands ? sale.revenue / 1000 : sale.revenue) : 0
    })
    return monthData
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Product (Stacked)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <BarChart
            dataset={chartData}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={products.map((product, index) => ({
              dataKey: product,
              label: product,
              stack: "total",
              color: `hsl(var(--chart-${index + 1}))`,
            }))}
            width={600}
            height={320}
            margin={{ left: 80, right: 20, top: 20, bottom: 40 }}
            slotProps={{
              tooltip: {
                formatter: (value, context) =>
                  `${context.seriesName}: ${formatCurrency(showInThousands ? value * 1000 : value, showInThousands)}`,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
