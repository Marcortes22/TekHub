"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import FileUploader from "@/components/excel/FileUploader"
import ExcelTable from "@/components/excel/ExcelTable"
import MarkingControls from "@/components/excel/MarkingControls"
import { useExcelProcessor } from "@/hooks/useExcelProcessor"

export default function ExcelPage() {
  const [preMarkRowNumber, setPreMarkRowNumber] = useState<string>("")

  const {
    excelData,
    markedCells,
    markedRows,
    markedColumns,
    markingMode,
    selectedMarkType,
    processFile,
    toggleCellMark,
    toggleRowMark,
    toggleColumnMark,
    setSelectedMarkType,
    setMarkingMode,
    clearMarks,
    exportWithMarks,
  } = useExcelProcessor()

  const handleFileSelect = (file: File) => {
    const rowNumber = preMarkRowNumber ? Number.parseInt(preMarkRowNumber) - 1 : undefined
    processFile(file, rowNumber)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Excel Marker</h1>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <label htmlFor="preMarkRow" className="block text-sm font-medium text-gray-700 mb-2">
              Fila a marcar automáticamente (opcional):
            </label>
            <input
              id="preMarkRow"
              type="number"
              min="1"
              placeholder="Ej: 5 para marcar la fila 5"
              value={preMarkRowNumber}
              onChange={(e) => setPreMarkRowNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-600 mt-1">
              Ingresa el número de fila que quieres que aparezca marcada al cargar el Excel
            </p>
          </div>

          <FileUploader onFileSelect={handleFileSelect} />

          {excelData && (
            <>
              <MarkingControls
                selectedMarkType={selectedMarkType}
                markingMode={markingMode}
                onMarkTypeChange={setSelectedMarkType}
                onMarkingModeChange={setMarkingMode}
                onClearMarks={clearMarks}
                onExport={exportWithMarks}
                hasData={!!excelData}
              />

              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Hoja: {excelData.sheetName}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  {markingMode === "cell"
                    ? "Haz clic en las celdas para marcarlas individualmente."
                    : markingMode === "row"
                      ? "Haz clic en el número de fila o en cualquier celda para marcar la fila completa."
                      : "Haz clic en la letra de columna o en cualquier celda para marcar la columna completa."}{" "}
                  Las marcas se exportarán con colores.
                </p>
              </div>

              <ExcelTable
                data={excelData.data}
                markedCells={markedCells}
                markedRows={markedRows}
                markedColumns={markedColumns}
                markingMode={markingMode}
                onCellClick={toggleCellMark}
                onRowClick={toggleRowMark}
                onColumnClick={toggleColumnMark}
              />

              {(markedCells.length > 0 || markedRows.length > 0 || markedColumns.length > 0) && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    {markedCells.length > 0 && `Celdas marcadas: ${markedCells.length}`}
                    {markedCells.length > 0 && (markedRows.length > 0 || markedColumns.length > 0) && " | "}
                    {markedRows.length > 0 && `Filas marcadas: ${markedRows.length}`}
                    {markedRows.length > 0 && markedColumns.length > 0 && " | "}
                    {markedColumns.length > 0 && `Columnas marcadas: ${markedColumns.length}`}{" "}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
