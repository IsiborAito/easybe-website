import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#122C34',
      contrastText: '#ffffff',
      light: blue[400]
    },
    secondary: {
      main: '#EE8434',
      contrastText: '#ffffff',
      light: '#FFFD82'
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
