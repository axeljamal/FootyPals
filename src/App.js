import "./App.css";
import Navbar from "./components/navbar/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";


// To override the default styling use below
const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "500",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
