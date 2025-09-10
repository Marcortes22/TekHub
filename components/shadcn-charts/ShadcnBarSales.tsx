"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { mockData } from "@/data/mock"

interface ShadcnBarSalesProps {
  year: number
  showInThousands: boolean
}

export function ShadcnBarSales({ year, showInThousands }: ShadcnBarSalesProps) {
  const yearData = mockData[year]

  const chartConfig = {
    productA: {
      label: "Producto A",
      color: "hsl(var(--chart-1))",
    },
    productB: {
      label: "Producto B",
      color: "hsl(var(--chart-2))",
    },
    productC: {
      label: "Producto C",
      color: "hsl(var(--chart-3))",
    },
  }

  const chartData = yearData.map((month) => ({
    month: month.month,
    productA: showInThousands ? month.productA / 1000 : month.productA,
    productB: showInThousands ? month.productB / 1000 : month.productB,
    productC: showInThousands ? month.productC / 1000 : month.productC,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas por Producto</CardTitle>
        <CardDescription>Comparación de ventas mensuales por producto en {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="productA" stackId="a" fill="var(--color-productA)" />
              <Bar dataKey="productB" stackId="a" fill="var(--color-productB)" />
              <Bar dataKey="productC" stackId="a" fill="var(--color-productC)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
