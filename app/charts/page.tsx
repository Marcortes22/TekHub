"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { ArrowLeft } from "lucide-react"
import { KpiCards } from "../../components/KpiCards"
import { BarSalesByProduct } from "../../components/BarSalesByProduct"
import { LineRevenue } from "../../components/LineRevenue"
import { AreaUnits } from "../../components/AreaUnits"
import { PieCategories } from "../../components/PieCategories"
import { RadarRegions } from "../../components/RadarRegions"
import { ScatterRevUnits } from "../../components/ScatterRevUnits"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Checkbox } from "../../components/ui/checkbox"
import { Moon, Sun } from "lucide-react"

export default function ChartsPage() {
  const [selectedYear, setSelectedYear] = useState("2024")
  const [showInThousands, setShowInThousands] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300`}>
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Inicio
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-balance">Dashboard de Gráficos</h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Year Selector */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>

              {/* Thousands Toggle */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="thousands"
                  checked={showInThousands}
                  onCheckedChange={(checked) => setShowInThousands(checked as boolean)}
                />
                <label htmlFor="thousands" className="text-sm font-medium">
                  Show in thousands
                </label>
              </div>

              {/* Dark Mode Toggle */}
              <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* KPI Cards */}
        <KpiCards year={selectedYear} showInThousands={showInThousands} />

        {/* Charts Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <BarSalesByProduct year={selectedYear} showInThousands={showInThousands} />
          </div>
          <div>
            <LineRevenue year={selectedYear} showInThousands={showInThousands} />
          </div>
          <div>
            <AreaUnits year={selectedYear} showInThousands={showInThousands} />
          </div>
          <div>
            <PieCategories year={selectedYear} />
          </div>
          <div>
            <RadarRegions year={selectedYear} />
          </div>
          <div className="lg:col-span-2 xl:col-span-1">
            <ScatterRevUnits year={selectedYear} showInThousands={showInThousands} />
          </div>
        </div>
      </main>
    </div>
  )
}
