"use client"

import type React from "react"

interface FileUploaderProps {
  onFileSelect: (file: File) => void
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onFileSelect(file)
    }
  }

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Subir archivo Excel</label>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>
  )
}

export default FileUploader
