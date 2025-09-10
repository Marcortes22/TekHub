"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LineChart } from "@mui/x-charts/LineChart"
import { getMonthlySales } from "../data/mock"
import { formatNumber } from "../utils/format"

interface AreaUnitsProps {
  year: string
  showInThousands: boolean
}

export function AreaUnits({ year, showInThousands }: AreaUnitsProps) {
  const sales = getMonthlySales(year)

  // Group by month and sum units
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
  const unitsData = months.map((month) => {
    const monthSales = sales.filter((s) => s.month === month)
    const totalUnits = monthSales.reduce((sum, sale) => sum + sale.units, 0)
    return showInThousands ? totalUnits / 1000 : totalUnits
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Units Sold</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <LineChart
            xAxis={[{ data: months, scaleType: "point" }]}
            series={[
              {
                data: unitsData,
                label: "Units",
                area: true,
                color: "hsl(var(--chart-2))",
                curve: "monotoneX",
              },
            ]}
            width={400}
            height={320}
            margin={{ left: 80, right: 20, top: 20, bottom: 40 }}
            slotProps={{
              tooltip: {
                formatter: (value) => `Units: ${formatNumber(showInThousands ? value * 1000 : value, showInThousands)}`,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
