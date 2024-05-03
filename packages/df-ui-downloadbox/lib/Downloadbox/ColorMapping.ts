type ColorTheme = {
  color: string
  backgroundColor: string
}

const ImageTheme: ColorTheme = {
  backgroundColor: "#2970ff",
  color: "#ffffff",
}

const WordTheme: ColorTheme = {
  backgroundColor: "#00A4EF",
  color: "#ffffff",
}

const ExcelTheme: ColorTheme = {
  backgroundColor: "#7FBA00",
  color: "#ffffff",
}

const PowerPointTheme: ColorTheme = {
  backgroundColor: "#F25022",
  color: "#ffffff",
}

const ArchivesTheme: ColorTheme = {
  backgroundColor: "#70707B",
  color: "#ffffff",
}

const SpecialTheme: ColorTheme = {
  backgroundColor: "#6AB023",
  color: "#ffffff",
}

// MIME Types from
// URL: developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const colorMapping = (type: string): ColorTheme => {
  switch (type) {
    // Images
    case "image/jpeg":
    case "image/png":
    case "image/gif":
    case "image/apng":
    case "image/bmp":
    case "image/svg+xml":
    case "image/tiff":
    case "image/webp":
      return ImageTheme

    // PDF
    case "application/pdf":
      return {
        backgroundColor: "#F53E59",
        color: "#ffffff",
      }

    // Word
    case "application/msword":
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return WordTheme

    // EXCEL
    case "application/vnd.ms-excel":
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return ExcelTheme

    // PowerPoint
    case "application/vnd.ms-powerpoint":
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return PowerPointTheme

    // Archives
    case "application/zip":
    case "application/vnd.rar":
    case "application/x-7z-compressed":
      return ArchivesTheme

    // Specials
    case "image/vnd.dwg":
    case "image/vnd.dxf":
    case "application/las":
      return SpecialTheme

    // Fallback
    default:
      return {
        backgroundColor: "#111111",
        color: "#ffffff",
      }
  }
}

export default colorMapping
