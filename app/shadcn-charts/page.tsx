"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Sun, Moon } from "lucide-react"
import Link from "next/link"

import { ShadcnKpiCards } from "@/components/shadcn-charts/ShadcnKpiCards"
import { ShadcnBarSales } from "@/components/shadcn-charts/ShadcnBarSales"
import { ShadcnLineRevenue } from "@/components/shadcn-charts/ShadcnLineRevenue"
import { ShadcnAreaUnits } from "@/components/shadcn-charts/ShadcnAreaUnits"
import { ShadcnPieCategories } from "@/components/shadcn-charts/ShadcnPieCategories"
import { ShadcnRadarRegions } from "@/components/shadcn-charts/ShadcnRadarRegions"

export default function ShadcnChartsPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2024)
  const [showInThousands, setShowInThousands] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold">Dashboard - shadcn/ui Charts</h1>
                <p className="text-muted-foreground">Gráficos interactivos con shadcn/ui y Recharts</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Controles</CardTitle>
              <CardDescription>Personaliza la vista de los datos</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Label htmlFor="year-select">Año:</Label>
                <Select
                  value={selectedYear.toString()}
                  onValueChange={(value) => setSelectedYear(Number.parseInt(value))}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="thousands" checked={showInThousands} onCheckedChange={setShowInThousands} />
                <Label htmlFor="thousands">Mostrar en miles</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                <Label htmlFor="dark-mode" className="flex items-center gap-2">
                  {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  Modo oscuro
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* KPI Cards */}
          <ShadcnKpiCards year={selectedYear} showInThousands={showInThousands} />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ShadcnBarSales year={selectedYear} showInThousands={showInThousands} />
            <ShadcnLineRevenue year={selectedYear} showInThousands={showInThousands} />
            <ShadcnAreaUnits year={selectedYear} showInThousands={showInThousands} />
            <ShadcnPieCategories year={selectedYear} showInThousands={showInThousands} />
            <ShadcnRadarRegions year={selectedYear} showInThousands={showInThousands} />
          </div>
        </div>
      </div>
    </div>
  )
}
