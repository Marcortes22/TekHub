"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LineChart } from "@mui/x-charts/LineChart"
import { getMonthlySales } from "../data/mock"
import { formatCurrency } from "../utils/format"

interface LineRevenueProps {
  year: string
  showInThousands: boolean
}

export function LineRevenue({ year, showInThousands }: LineRevenueProps) {
  const sales = getMonthlySales(year)

  // Group by month and sum revenue
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const revenueData = months.map((month) => {
    const monthSales = sales.filter((s) => s.month === month)
    const totalRevenue = monthSales.reduce((sum, sale) => sum + sale.revenue, 0)
    return showInThousands ? totalRevenue / 1000 : totalRevenue
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <LineChart
            xAxis={[{ data: months, scaleType: "point" }]}
            series={[
              {
                data: revenueData,
                label: "Revenue",
                color: "hsl(var(--chart-1))",
                curve: "linear",
              },
            ]}
            width={400}
            height={320}
            margin={{ left: 80, right: 20, top: 20, bottom: 40 }}
            slotProps={{
              tooltip: {
                formatter: (value) =>
                  `Revenue: ${formatCurrency(showInThousands ? value * 1000 : value, showInThousands)}`,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
