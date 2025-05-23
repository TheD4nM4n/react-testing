import CardExample from "./components/CardExample";
import "./App.css";
import JustinComponent from "./components/JustinComponent/JustinComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { Button } from "react-bootstrap";
import DanPage from "./pages/DanPage/DanPage";
import JustinPage from "./pages/JustinPage/JustinPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="navbar">
            <Button variant="primary" href="/">Home</Button>
            <Button variant="primary" href="/dan">Dan</Button>
            <Button variant="primary" href="/justin">Justin</Button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dan" element={<DanPage />} />
        <Route path="/justin" element={<JustinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;