import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const theme = createTheme({
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

export default responsiveFontSizes(theme);
