import { ThemeOptions as ThemeOptionsMui } from '@mui/material';
import '@fontsource/rubik';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/400-italic.css';

export const basicTheme: ThemeOptions = {
  direction: 'rtl',
  spacing: 8,
  typography: {
    fontSize: 12,
    fontFamily: 'Rubik',
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px white inset',
            WebkitTextFillColor: '#000000',
          },
          '& input:-webkit-autofill:hover': {
            WebkitBoxShadow: '0 0 0 100px white inset',
            WebkitTextFillColor: '#000000',
          },
          '& input:-webkit-autofill:focus': {
            WebkitBoxShadow: '0 0 0 100px white inset',
            WebkitTextFillColor: '#000000',
          },
          '& input:-webkit-autofill:active': {
            WebkitBoxShadow: '0 0 0 100px white inset',
            WebkitTextFillColor: '#000000',
          },
        },
      },
    },
  },
  palette: {
    text: {
      primary: '#000',
    },
    primary: {
      main: '#000',
    },
  },
  colors: {
    white: '#FFFF',
    gray: '#F7F7F7',
  },
};

interface ThemeOptions extends ThemeOptionsMui {
  colors?: {
    white?: string;
    gray?: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      white: string;
      gray: string;
    };
  }
}
// allow configuration using `createTheme`
