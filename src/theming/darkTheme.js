import { createTheme } from "@mui/material";
import { grey, yellow} from "@mui/material/colors";

const darkTheme = createTheme({
    palette: {
        primary: {
            light: grey[500],
            main: grey[700],
            dark: grey[900],
        },
        secondary: {
            light: yellow[200],
            main: yellow[500],
            dark: yellow[800],
        }
    },
});

export default darkTheme;