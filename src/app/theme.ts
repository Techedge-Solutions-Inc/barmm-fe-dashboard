import { Manrope } from 'next/font/google';
import { createTheme, Theme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  // display: 'swap',
  fallback: ['Manrope, san-serif']
});

// Create a theme instance.
const theme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#009865'
    },
    secondary: {
      main: '#FFC200'
    },
    error: {
      main: '#D9353E'
    },
  },

  components: {
    MuiChip: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontWeight: 700,
          fontSize: 11
          // height: '2.875rem',
        }
      }
    },
    // Name of the component
    MuiFormHelperText: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          letterSpacing: 'inherit'
          // height: '2.875rem',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '8px !important',
          '&.MuiInputBase-inputMultiline': {
            height: '100%'
          },
          fontFamily: manrope.style.fontFamily,
          height: '2.875rem'
          // border: `1px solid #CACECD`
        }
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS

          height: '4.5rem',
          display: `grid`,
          alignItems: `center`
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          height: '2.875rem',
          borderRadius: '8px !important',
          '&.MuiInputBase-multiline': {
            height: '100%'
          },
          fontFamily: manrope.style.fontFamily
          // height: '2.875rem',
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          paddingLeft: '18px',
          '&.Mui-selected': {
            backgroundColor: '#F2F8FF'
          },
          '&.Mui-focusVisible': {
            backgroundColor: '#F2F8FF'
          },
          ':hover': {
            backgroundColor: '#F2F8FF'
          }
        }
      }
    },
    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: {
    //       minWidth: 36,
    //     },
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // fontSize: '1rem',
          borderRadius: '8px !important',
          fontWeight: 700,
          fontFamily: manrope.style.fontFamily,
          textTransform: 'none',
          height: '3rem',
          whiteSpace: 'nowrap',
          minWidth: `auto`, 
          '& .MuiButton-label': {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textAlign: 'left',
            display: 'block'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // Some CSS
          borderColor: '#fff'
        }
      }
    }
  },

  typography: {
    fontFamily: manrope.style.fontFamily,
    allVariants: {
      // color: '#3D3D3D'
    }
  }
});

export default theme;
