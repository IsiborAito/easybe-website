import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[600],
            contrastText: '#ffffff',
            light: blue[400]
        },
        secondary : {
            main: red[700],
            contrastText: '#ffffff',
            light: red[400]
        },
    }
});

export default responsiveFontSizes(theme);