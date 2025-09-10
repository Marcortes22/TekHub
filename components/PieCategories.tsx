"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { PieChart } from "@mui/x-charts/PieChart"
import { getCategories } from "../data/mock"

interface PieCategoriesProps {
  year: string
}

export function PieCategories({ year }: PieCategoriesProps) {
  const categories = getCategories(year)

  const pieData = categories.map((category, index) => ({
    id: index,
    value: category.value,
    label: category.name,
    color: `hsl(var(--chart-${index + 1}))`,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribution by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80 flex items-center justify-center">
          <PieChart
            series={[
              {
                data: pieData,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              },
            ]}
            width={400}
            height={320}
            margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
            slotProps={{
              tooltip: {
                formatter: (value, context) => `${context.label}: ${value.value}%`,
              },
            }}
          />
        </div>
      </CardContent>
    </Card>
  )
}
