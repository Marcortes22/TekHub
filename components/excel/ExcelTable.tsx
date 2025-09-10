"use client"

import type React from "react"
import type { MarkedCell, MarkedRow, MarkedColumn } from "@/types/excel"

interface ExcelTableProps {
  data: any[][]
  markedCells: MarkedCell[]
  markedRows: MarkedRow[]
  markedColumns: MarkedColumn[]
  markingMode: "cell" | "row" | "column"
  onCellClick: (row: number, col: number) => void
  onRowClick: (row: number) => void
  onColumnClick: (col: number) => void
}

const ExcelTable: React.FC<ExcelTableProps> = ({
  data,
  markedCells,
  markedRows,
  markedColumns,
  markingMode,
  onCellClick,
  onRowClick,
  onColumnClick,
}) => {
  const getCellStyle = (row: number, col: number) => {
    const markedColumn = markedColumns.find((markedColumn) => markedColumn.col === col)
    if (markedColumn) {
      return markedColumn.type === "error" ? "bg-red-200 border-red-400" : "bg-yellow-200 border-yellow-400"
    }

    const markedRow = markedRows.find((markedRow) => markedRow.row === row)
    if (markedRow) {
      return markedRow.type === "error" ? "bg-red-200 border-red-400" : "bg-yellow-200 border-yellow-400"
    }

    const markedCell = markedCells.find((cell) => cell.row === row && cell.col === col)
    if (markedCell) {
      return markedCell.type === "error" ? "bg-red-200 border-red-400" : "bg-yellow-200 border-yellow-400"
    }
    return "bg-white hover:bg-gray-50"
  }

  const getColumnHeaderStyle = (col: number) => {
    const markedColumn = markedColumns.find((markedColumn) => markedColumn.col === col)
    if (markedColumn) {
      return markedColumn.type === "error"
        ? "bg-red-300 border-red-500 text-red-800"
        : "bg-yellow-300 border-yellow-500 text-yellow-800"
    }
    return "bg-gray-100 hover:bg-gray-200 text-gray-600"
  }

  const getRowNumberStyle = (row: number) => {
    const markedRow = markedRows.find((markedRow) => markedRow.row === row)
    if (markedRow) {
      return markedRow.type === "error"
        ? "bg-red-300 border-red-500 text-red-800"
        : "bg-yellow-300 border-yellow-500 text-yellow-800"
    }
    return "bg-gray-100 hover:bg-gray-200 text-gray-600"
  }

  const handleCellClick = (row: number, col: number) => {
    if (markingMode === "row") {
      onRowClick(row)
    } else if (markingMode === "column") {
      onColumnClick(col)
    } else {
      onCellClick(row, col)
    }
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay datos para mostrar. Sube un archivo Excel para comenzar.
      </div>
    )
  }

  const getColumnLetter = (index: number) => {
    let result = ""
    while (index >= 0) {
      result = String.fromCharCode(65 + (index % 26)) + result
      index = Math.floor(index / 26) - 1
    }
    return result
  }

  return (
    <div className="overflow-auto max-h-96 border border-gray-300 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-2 text-xs font-medium text-gray-500 border-r-2 border-gray-300 min-w-[40px]">#</th>
            {data[0]?.map((_, colIndex) => (
              <th
                key={colIndex}
                className={`px-3 py-2 text-xs font-medium border-r border-gray-200 cursor-pointer transition-colors text-center ${getColumnHeaderStyle(colIndex)}`}
                onClick={() => onColumnClick(colIndex)}
                title={`Hacer clic para marcar columna ${getColumnLetter(colIndex)}`}
              >
                {getColumnLetter(colIndex)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className={`px-2 py-2 text-xs font-medium border-r-2 border-gray-300 cursor-pointer transition-colors text-center min-w-[40px] ${getRowNumberStyle(rowIndex)}`}
                onClick={() => onRowClick(rowIndex)}
                title={`Hacer clic para marcar fila ${rowIndex + 1}`}
              >
                {rowIndex + 1}
              </td>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-3 py-2 text-sm text-gray-900 border-r border-gray-200 cursor-pointer transition-colors ${getCellStyle(rowIndex, colIndex)}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  title={
                    markingMode === "row"
                      ? `Hacer clic para marcar fila ${rowIndex + 1}`
                      : markingMode === "column"
                        ? `Hacer clic para marcar columna ${getColumnLetter(colIndex)}`
                        : `Hacer clic para marcar celda`
                  }
                >
                  {cell || ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExcelTable
