"use client"

import { useState } from "react"
import * as XLSX from "xlsx"
import ExcelJS from "exceljs"
import type { ExcelData, MarkedCell, MarkedRow, MarkedColumn, MarkingMode } from "@/types/excel"

export const useExcelProcessor = () => {
  const [excelData, setExcelData] = useState<ExcelData | null>(null)
  const [markedCells, setMarkedCells] = useState<MarkedCell[]>([])
  const [markedRows, setMarkedRows] = useState<MarkedRow[]>([])
  const [markedColumns, setMarkedColumns] = useState<MarkedColumn[]>([])
  const [markingMode, setMarkingMode] = useState<MarkingMode>("cell")
  const [selectedMarkType, setSelectedMarkType] = useState<"error" | "warning">("error")

  const processFile = (file: File, preMarkRow?: number) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer)
      const workbook = XLSX.read(data, { type: "array" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

      setExcelData({
        data: jsonData as any[][],
        sheetName,
      })

      // Clear previous marks
      setMarkedCells([])
      setMarkedRows([])
      setMarkedColumns([])

      // Pre-mark row if specified
      if (preMarkRow !== undefined && preMarkRow >= 0 && preMarkRow < (jsonData as any[][]).length) {
        setMarkedRows([{ row: preMarkRow, type: selectedMarkType }])
      }
    }
    reader.readAsArrayBuffer(file)
  }

  const toggleCellMark = (row: number, col: number) => {
    setMarkedCells((prev) => {
      const existingIndex = prev.findIndex((cell) => cell.row === row && cell.col === col)
      if (existingIndex >= 0) {
        return prev.filter((_, index) => index !== existingIndex)
      }
      return [...prev, { row, col, type: selectedMarkType }]
    })
  }

  const toggleRowMark = (row: number) => {
    setMarkedRows((prev) => {
      const existingIndex = prev.findIndex((markedRow) => markedRow.row === row)
      if (existingIndex >= 0) {
        return prev.filter((_, index) => index !== existingIndex)
      }
      return [...prev, { row, type: selectedMarkType }]
    })
  }

  const toggleColumnMark = (col: number) => {
    setMarkedColumns((prev) => {
      const existingIndex = prev.findIndex((markedColumn) => markedColumn.col === col)
      if (existingIndex >= 0) {
        return prev.filter((_, index) => index !== existingIndex)
      }
      return [...prev, { col, type: selectedMarkType }]
    })
  }

  const clearMarks = () => {
    setMarkedCells([])
    setMarkedRows([])
    setMarkedColumns([])
  }

  const exportWithMarks = async () => {
    if (!excelData) return

    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet(excelData.sheetName)

    // Add data to worksheet
    excelData.data.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const excelCell = worksheet.getCell(rowIndex + 1, colIndex + 1)
        excelCell.value = cell
      })
    })

    // Apply column marks (highest priority)
    markedColumns.forEach(({ col, type }) => {
      const fillColor = type === "error" ? "FFCCCC" : "FFFFCC"
      for (let row = 1; row <= excelData.data.length; row++) {
        const cell = worksheet.getCell(row, col + 1)
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: fillColor },
        }
      }
    })

    // Apply row marks (medium priority)
    markedRows.forEach(({ row, type }) => {
      const fillColor = type === "error" ? "FFCCCC" : "FFFFCC"
      const rowData = excelData.data[row]
      if (rowData) {
        rowData.forEach((_, colIndex) => {
          // Only apply if not already marked by column
          const isColumnMarked = markedColumns.some((markedColumn) => markedColumn.col === colIndex)
          if (!isColumnMarked) {
            const cell = worksheet.getCell(row + 1, colIndex + 1)
            cell.fill = {
              type: "pattern",
              pattern: "solid",
              fgColor: { argb: fillColor },
            }
          }
        })
      }
    })

    // Apply individual cell marks (lowest priority)
    markedCells.forEach(({ row, col, type }) => {
      // Only apply if not already marked by row or column
      const isRowMarked = markedRows.some((markedRow) => markedRow.row === row)
      const isColumnMarked = markedColumns.some((markedColumn) => markedColumn.col === col)

      if (!isRowMarked && !isColumnMarked) {
        const fillColor = type === "error" ? "FFCCCC" : "FFFFCC"
        const cell = worksheet.getCell(row + 1, col + 1)
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: fillColor },
        }
      }
    })

    // Generate and download file
    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${excelData.sheetName}_marcado.xlsx`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
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
  }
}
