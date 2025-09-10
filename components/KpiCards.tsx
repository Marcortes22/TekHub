"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { LineChart } from "@mui/x-charts/LineChart"
import { getKPIs } from "../data/mock"
import { formatCurrency, formatPercentage } from "../utils/format"
import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react"

interface KpiCardsProps {
  year: string
  showInThousands: boolean
}

export function KpiCards({ year, showInThousands }: KpiCardsProps) {
  const kpis = getKPIs(year)

  const sparklineData = [65, 72, 68, 75, 82, 78, 85, 88, 92, 89, 95, 98]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(kpis.revenue, showInThousands)}</div>
          <div className="h-16 mt-2">
            <LineChart
              width={200}
              height={60}
              series={[{ data: sparklineData, area: true, showMark: false }]}
              margin={{ left: 0, right: 0, top: 5, bottom: 5 }}
              sx={{
                "& .MuiAreaElement-root": {
                  fill: "hsl(var(--primary))",
                  fillOpacity: 0.3,
                },
                "& .MuiLineElement-root": {
                  stroke: "hsl(var(--primary))",
                  strokeWidth: 2,
                },
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Costs</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(kpis.cost, showInThousands)}</div>
          <div className="h-16 mt-2">
            <LineChart
              width={200}
              height={60}
              series={[{ data: sparklineData.map((v) => v * 0.7), area: true, showMark: false }]}
              margin={{ left: 0, right: 0, top: 5, bottom: 5 }}
              sx={{
                "& .MuiAreaElement-root": {
                  fill: "hsl(var(--destructive))",
                  fillOpacity: 0.3,
                },
                "& .MuiLineElement-root": {
                  stroke: "hsl(var(--destructive))",
                  strokeWidth: 2,
                },
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
          <PieChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(kpis.margin, showInThousands)}</div>
          <div className="h-16 mt-2">
            <LineChart
              width={200}
              height={60}
              series={[{ data: sparklineData.map((v) => v * 0.3), area: true, showMark: false }]}
              margin={{ left: 0, right: 0, top: 5, bottom: 5 }}
              sx={{
                "& .MuiAreaElement-root": {
                  fill: "hsl(var(--chart-2))",
                  fillOpacity: 0.3,
                },
                "& .MuiLineElement-root": {
                  stroke: "hsl(var(--chart-2))",
                  strokeWidth: 2,
                },
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatPercentage(kpis.growth)}</div>
          <div className="h-16 mt-2">
            <LineChart
              width={200}
              height={60}
              series={[{ data: sparklineData.map((v) => v * 0.2), area: true, showMark: false }]}
              margin={{ left: 0, right: 0, top: 5, bottom: 5 }}
              sx={{
                "& .MuiAreaElement-root": {
                  fill: "hsl(var(--chart-4))",
                  fillOpacity: 0.3,
                },
                "& .MuiLineElement-root": {
                  stroke: "hsl(var(--chart-4))",
                  strokeWidth: 2,
                },
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
