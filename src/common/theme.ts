import {
  createTheme,
  darken,
  lighten,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles'

const fontFamily = 'Montserrat'

// Instead of exporting `colors` variable use theme:
// import theme from 'common/theme'
// <meta name="theme-color" content={theme.palette.primary.main} />
const colors = {
  blue: {
    light: '#F3FDFF',
    main: '#32A9FE',
    mainDark: darken('#32A9FE', 0.2),
    dark: '#294E85',
  },
  yellow: {
    main: '#FFCB57',
    dark: '#F6992B',
  },
  gray: {
    main: '#F5F5F5',
    background: '#FAFAFA',
  },
  white: {
    main: '#ffffff',
  },
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      light: colors.blue.light,
      main: colors.blue.main,
      dark: colors.blue.dark,
    },
    secondary: {
      main: colors.yellow.main,
      light: colors.gray.main,
    },
    background: {
      default: colors.white.main,
    },
    info: {
      main: colors.blue.dark,
      light: colors.blue.mainDark,
      dark: darken(colors.blue.dark, 0.2),
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          lineHeight: 2,
          borderRadius: '25px',
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
        textPrimary: {
          color: colors.blue.dark,
          '&:hover': {
            color: colors.blue.mainDark,
          },
        },
        outlined: {
          backgroundColor: colors.white.main,
        },
        outlinedPrimary: {
          color: colors.blue.dark,
          '&:hover': {
            backgroundColor: lighten(colors.blue.main, 0.85),
          },
        },
        outlinedSecondary: {
          color: darken(colors.yellow.dark, 0.4),
          borderColor: colors.yellow.main,
          '&:hover': {
            backgroundColor: lighten(colors.yellow.main, 0.85),
            borderColor: darken(colors.yellow.main, 0.15),
          },
        },
        containedPrimary: {
          backgroundColor: colors.blue.main,
          '&:hover': {
            backgroundColor: darken(colors.blue.main, 0.2),
          },
        },
        containedSecondary: {
          backgroundColor: colors.yellow.dark,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          borderRadius: 60,
        },
        multiline: {
          borderRadius: 20,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: 60,
        },
        multiline: {
          borderRadius: 20,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 60,
        },
        multiline: {
          borderRadius: 20,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },

    MuiMenuItem: {
      defaultProps: {
        sx: { py: 1.5 },
      },
    },
  },

  typography: {
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily, color: colors.blue.dark },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
    button: { fontFamily, textTransform: 'initial' },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.43',
      letterSpacing: '0.01071em',
    },
  },
}

// https://material-ui.com/customization/default-theme/#default-theme
const theme = createTheme(themeOptions)
export default responsiveFontSizes(theme)
