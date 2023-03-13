import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    brand: {
      color: {
        primary: string
        secondary: string
      }
    }
    tons: {
      neutro: {
        bg: {
          primary: string
          secondary: string
        }
        text: string
        border: string
      }
    }
    space: {
      medium: string
    },
    typography: {
      family: string,
      size: {
        extra_large: string,
        large: string,
        medium: string,
        small: string
      },
      weight: {
        bold: number,
        semi_bold: number,
        medium: number,
        regular: number
      },
      height: {
        extra_large: string,
        large: string,
        medium: string,
        small: string,
      },
    }
  }
}