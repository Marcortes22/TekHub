"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { mockData } from "@/data/mock"

interface ShadcnLineRevenueProps {
  year: number
  showInThousands: boolean
}

export function ShadcnLineRevenue({ year, showInThousands }: ShadcnLineRevenueProps) {
  const yearData = mockData[year]

  const chartConfig = {
    revenue: {
      label: "Ingresos",
      color: "hsl(var(--chart-1))",
    },
  }

  const chartData = yearData.map((month) => ({
    month: month.month,
    revenue: showInThousands ? month.revenue / 1000 : month.revenue,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolución de Ingresos</CardTitle>
        <CardDescription>Tendencia de ingresos mensuales en {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={3}
                dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
