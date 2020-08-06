import colorConverter from 'color-convert'

export const hexToRgba = (hexColor: string, opacity: number): string => {
    const rgbColor = colorConverter.hex.rgb(hexColor)
    return `rgba(${rgbColor.join(',')}, ${opacity})`
}