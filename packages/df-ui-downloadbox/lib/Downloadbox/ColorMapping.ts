type ColorTheme = {
  color: string
  backgroundColor: string
}

const colorMapping = (type: string): ColorTheme => {
  switch (type) {
    case "application/pdf":
      return {
        backgroundColor: "green",
        color: "pink",
      }
    default:
      return {
        backgroundColor: "#111111",
        color: "#ffffff",
      }
  }
}

export default colorMapping
