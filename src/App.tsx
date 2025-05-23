import CardExample from "./components/CardExample";
import "./App.css";
import JustinComponent from "./components/JustinComponent/JustinComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DanPage from "./pages/DanPage/DanPage";
import JustinPage from "./pages/JustinPage/JustinPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dan">Dan</a>
          </li>
          <li>
            <a href="/justin">Justin</a>
          </li>
        </ul>
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