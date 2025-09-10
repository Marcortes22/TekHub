"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ScatterChart } from "@mui/x-charts/ScatterChart"
import { getMonthlySales } from "../data/mock"
import { formatCurrency, formatNumber } from "../utils/format"

interface ScatterRevUnitsProps {
  year: string
  showInThousands: boolean
}

export function ScatterRevUnits({ year, showInThousands }: ScatterRevUnitsProps) {
  const sales = getMonthlySales(year)

  const scatterData = sales.map((sale) => ({
    x: showInThousands ? sale.units / 1000 : sale.units,
    y: showInThousands ? sale.revenue / 1000 : sale.revenue,
    id: `${sale.month}-${sale.product}`,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue vs Units</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ScatterChart
            width={400}
            height={320}
            series={[
              {
                data: scatterData,
                label: "Sales Data",
                color: "hsl(var(--chart-3))",
              },
            ]}
            xAxis={[
              {
                label: showInThousands ? "Units (K)" : "Units",
                min: 0,
              },
            ]}
            yAxis={[
              {
                label: showInThousands ? "Revenue (K)" : "Revenue",
                min: 0,
              },
            ]}
            margin={{ left: 80, right: 20, top: 20, bottom: 60 }}
            slotProps={{
              tooltip: {
                formatter: (value, context) =>
                  `Units: ${formatNumber(showInThousands ? value.x * 1000 : value.x, showInThousands)}, Revenue: ${formatCurrency(showInThousands ? value.y * 1000 : value.y, showInThousands)}`,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
