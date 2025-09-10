"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { mockData } from "@/data/mock"

interface ShadcnAreaUnitsProps {
  year: number
  showInThousands: boolean
}

export function ShadcnAreaUnits({ year, showInThousands }: ShadcnAreaUnitsProps) {
  const yearData = mockData[year]

  const chartConfig = {
    units: {
      label: "Unidades",
      color: "hsl(var(--chart-2))",
    },
  }

  const chartData = yearData.map((month) => ({
    month: month.month,
    units: showInThousands ? month.units / 1000 : month.units,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unidades Vendidas</CardTitle>
        <CardDescription>Volumen de unidades vendidas por mes en {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="units"
                stroke="var(--color-units)"
                fill="var(--color-units)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
