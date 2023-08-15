import { Manrope } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  // display: 'swap',
  fallback: ['Manrope, san-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E57A8',
    },
    secondary: {
      main: '#FFC200',
    },
    error: {
      main: '#D9353E',
    },
  },

  components: {
    // Name of the component
    MuiFormHelperText: {
      styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            letterSpacing: 'inherit'
            // height: '3.125rem',
          },
        },
      
     },
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '0px !important',
          '&.MuiInputBase-inputMultiline': {
            height: '100%',
            
          },
          fontFamily: manrope.style.fontFamily,
          // height: '3.125rem',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS

          height: '4.5rem',
          display: `grid`,
          alignItems: `center`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          height: '3.125rem',
          borderRadius: '0px !important',
          '&.MuiInputBase-multiline': {
            height: '100%',
          },
          fontFamily: manrope.style.fontFamily,
          // height: '3.125rem',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          paddingLeft: '18px',
          '&.Mui-selected': {
            backgroundColor: '#F2F8FF',
          },
          '&.Mui-focusVisible': {
            backgroundColor: '#F2F8FF',
          },
          ':hover': {
            backgroundColor: '#F2F8FF',
          },
        },
      },
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
          fontSize: '1rem',
          height: '3.125rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: 'red' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // Some CSS
          borderColor: '#fff',
        },
      },
    },
  },

  typography: {
    fontFamily: manrope.style.fontFamily,
    allVariants: {
      color: '#3D3D3D',
    },
  },
});

export default theme;
