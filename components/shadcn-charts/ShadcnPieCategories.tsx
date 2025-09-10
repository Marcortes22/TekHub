"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { mockData } from "@/data/mock"

interface ShadcnPieCategoriesProps {
  year: number
  showInThousands: boolean
}

export function ShadcnPieCategories({ year, showInThousands }: ShadcnPieCategoriesProps) {
  const yearData = mockData[year]

  const chartConfig = {
    electronics: {
      label: "Electrónicos",
      color: "hsl(var(--chart-1))",
    },
    clothing: {
      label: "Ropa",
      color: "hsl(var(--chart-2))",
    },
    books: {
      label: "Libros",
      color: "hsl(var(--chart-3))",
    },
    home: {
      label: "Hogar",
      color: "hsl(var(--chart-4))",
    },
  }

  // Calculate totals for each category
  const totals = yearData.reduce(
    (acc, month) => {
      acc.electronics += month.categories.electronics
      acc.clothing += month.categories.clothing
      acc.books += month.categories.books
      acc.home += month.categories.home
      return acc
    },
    { electronics: 0, clothing: 0, books: 0, home: 0 },
  )

  const chartData = Object.entries(totals).map(([key, value]) => ({
    category: chartConfig[key as keyof typeof chartConfig].label,
    value: showInThousands ? value / 1000 : value,
    fill: chartConfig[key as keyof typeof chartConfig].color,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas por Categoría</CardTitle>
        <CardDescription>Distribución de ventas por categoría en {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={chartData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
