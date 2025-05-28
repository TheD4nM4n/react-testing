import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DanPage from "./pages/DanPage/DanPage";
import JustinPage from "./pages/JustinPage/JustinPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { AppBar, createTheme, CssBaseline, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const darkTheme = createTheme(
  {
    palette: {
      mode: "dark"
    },
  }
)
function App() {
  
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Sidebar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dan" element={<DanPage />} />
        <Route path="/justin" element={<JustinPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>
    );
}

export default App;