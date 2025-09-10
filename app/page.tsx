"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileSpreadsheet, BarChart3, TrendingUp } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Herramientas de Análisis</h1>
        <p className="text-xl text-gray-600 mb-12">Selecciona la herramienta que necesitas para tu trabajo</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Excel Marker Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <FileSpreadsheet className="h-16 w-16 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Excel Marker</h2>
            <p className="text-gray-600 mb-6">
              Sube archivos Excel, marca celdas, filas o columnas con colores y exporta con las marcas aplicadas.
            </p>
            <Link href="/excel">
              <Button className="w-full bg-green-600 hover:bg-green-700">Abrir Excel Marker</Button>
            </Link>
          </div>

          {/* Charts Dashboard Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <BarChart3 className="h-16 w-16 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard MUI Charts</h2>
            <p className="text-gray-600 mb-6">
              Visualiza datos con múltiples tipos de gráficos interactivos usando MUI X Charts.
            </p>
            <Link href="/charts">
              <Button className="w-full bg-blue-600 hover:blue-700">Abrir Dashboard MUI</Button>
            </Link>
          </div>

          {/* Shadcn Charts Dashboard Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <TrendingUp className="h-16 w-16 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard shadcn/ui</h2>
            <p className="text-gray-600 mb-6">
              Gráficos elegantes con shadcn/ui y Recharts, con theming automático y componentes reutilizables.
            </p>
            <Link href="/shadcn-charts">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Abrir Dashboard shadcn</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
