"use client"

import type React from "react"

interface MarkingControlsProps {
  selectedMarkType: "error" | "warning"
  markingMode: "cell" | "row" | "column"
  onMarkTypeChange: (type: "error" | "warning") => void
  onMarkingModeChange: (mode: "cell" | "row" | "column") => void
  onClearMarks: () => void
  onExport: () => void
  hasData: boolean
}

const MarkingControls: React.FC<MarkingControlsProps> = ({
  selectedMarkType,
  markingMode,
  onMarkTypeChange,
  onMarkingModeChange,
  onClearMarks,
  onExport,
  hasData,
}) => {
  return (
    <div className="mb-4 flex flex-wrap gap-4 items-center">
      <div className="flex gap-2">
        <label className="text-sm font-medium text-gray-700">Modo de marcado:</label>
        <button
          onClick={() => onMarkingModeChange("cell")}
          className={`px-3 py-1 rounded text-sm font-medium ${
            markingMode === "cell" ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          Celdas
        </button>
        <button
          onClick={() => onMarkingModeChange("row")}
          className={`px-3 py-1 rounded text-sm font-medium ${
            markingMode === "row" ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          Filas
        </button>
        <button
          onClick={() => onMarkingModeChange("column")}
          className={`px-3 py-1 rounded text-sm font-medium ${
            markingMode === "column" ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          Columnas
        </button>
      </div>

      <div className="flex gap-2">
        <label className="text-sm font-medium text-gray-700">Tipo de marca:</label>
        <button
          onClick={() => onMarkTypeChange("error")}
          className={`px-3 py-1 rounded text-sm font-medium ${
            selectedMarkType === "error" ? "bg-red-500 text-white" : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
        >
          Error
        </button>
        <button
          onClick={() => onMarkTypeChange("warning")}
          className={`px-3 py-1 rounded text-sm font-medium ${
            selectedMarkType === "warning"
              ? "bg-yellow-500 text-white"
              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
          }`}
        >
          Advertencia
        </button>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onClearMarks}
          disabled={!hasData}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-sm"
        >
          Limpiar marcas
        </button>
        <button
          onClick={onExport}
          disabled={!hasData}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed text-sm"
        >
          Exportar con marcas
        </button>
      </div>
    </div>
  )
}

export default MarkingControls
