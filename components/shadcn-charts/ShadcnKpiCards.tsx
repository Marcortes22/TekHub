"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, ResponsiveContainer } from "recharts"
import { mockData } from "@/data/mock"
import { formatNumber } from "@/utils/format"

interface ShadcnKpiCardsProps {
  year: number
  showInThousands: boolean
}

export function ShadcnKpiCards({ year, showInThousands }: ShadcnKpiCardsProps) {
  const yearData = mockData[year]

  const totalRevenue = yearData.reduce((sum, month) => sum + month.revenue, 0)
  const totalUnits = yearData.reduce((sum, month) => sum + month.units, 0)
  const avgRevenue = totalRevenue / yearData.length
  const growth = year === 2024 ? 15.2 : 8.7

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
  }

  const sparklineData = yearData.map((month) => ({
    month: month.month,
    revenue: month.revenue,
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">💰</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${formatNumber(totalRevenue, showInThousands)}</div>
          <p className="text-xs text-muted-foreground">+{growth}% desde el año anterior</p>
          <div className="h-[60px] mt-2">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData}>
                  <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Unidades Vendidas</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">📦</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(totalUnits, showInThousands)}</div>
          <p className="text-xs text-muted-foreground">+12.3% desde el año anterior</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Promedio Mensual</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">📊</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${formatNumber(avgRevenue, showInThousands)}</div>
          <p className="text-xs text-muted-foreground">Ingresos promedio por mes</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Crecimiento</CardTitle>
          <div className="h-4 w-4 text-muted-foreground">📈</div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{growth}%</div>
          <p className="text-xs text-muted-foreground">Crecimiento anual</p>
        </CardContent>
      </Card>
    </div>
  )
}
