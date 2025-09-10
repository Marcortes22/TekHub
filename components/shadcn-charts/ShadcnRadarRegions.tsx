"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { mockData } from "@/data/mock"

interface ShadcnRadarRegionsProps {
  year: number
  showInThousands: boolean
}

export function ShadcnRadarRegions({ year, showInThousands }: ShadcnRadarRegionsProps) {
  const yearData = mockData[year]

  const chartConfig = {
    performance: {
      label: "Rendimiento",
      color: "hsl(var(--chart-1))",
    },
  }

  // Calculate totals for each region
  const totals = yearData.reduce(
    (acc, month) => {
      acc.north += month.regions.north
      acc.south += month.regions.south
      acc.east += month.regions.east
      acc.west += month.regions.west
      acc.center += month.regions.center
      return acc
    },
    { north: 0, south: 0, east: 0, west: 0, center: 0 },
  )

  const chartData = [
    {
      region: "Norte",
      performance: showInThousands ? totals.north / 1000 : totals.north,
      fullMark: showInThousands ? 150 : 150000,
    },
    {
      region: "Sur",
      performance: showInThousands ? totals.south / 1000 : totals.south,
      fullMark: showInThousands ? 150 : 150000,
    },
    {
      region: "Este",
      performance: showInThousands ? totals.east / 1000 : totals.east,
      fullMark: showInThousands ? 150 : 150000,
    },
    {
      region: "Oeste",
      performance: showInThousands ? totals.west / 1000 : totals.west,
      fullMark: showInThousands ? 150 : 150000,
    },
    {
      region: "Centro",
      performance: showInThousands ? totals.center / 1000 : totals.center,
      fullMark: showInThousands ? 150 : 150000,
    },
  ]

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Rendimiento por Región</CardTitle>
        <CardDescription>Comparación del rendimiento de ventas por región en {year}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="region" />
              <PolarRadiusAxis />
              <Radar
                name="Rendimiento"
                dataKey="performance"
                stroke="var(--color-performance)"
                fill="var(--color-performance)"
                fillOpacity={0.3}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
