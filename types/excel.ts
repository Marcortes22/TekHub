export interface ExcelData {
  data: any[][]
  sheetName: string
}

export interface MarkedCell {
  row: number
  col: number
  type: "error" | "warning"
}

export interface MarkedRow {
  row: number
  type: "error" | "warning"
}

export interface MarkedColumn {
  col: number
  type: "error" | "warning"
}

export type MarkingMode = "cell" | "row" | "column"
