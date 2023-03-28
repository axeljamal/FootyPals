import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./components/pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DynamicTable from "./components/table/table";
import Fixture from "./components/fixture/fixture";
import Navbar from "./components/navbar/navbar";

// To override the default styling use below
const theme = createTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontWeightLight: "300",
    fontWeightRegular: "400",
    fontWeightBold: "500",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    // myBtn: {
    //   main: "#DDB61A",
    // },
  },
});

function App() {                                     
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table" element={<DynamicTable />} />
            <Route path="/fixture" element={<Fixture />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
