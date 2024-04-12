import { Route, Routes } from "react-router-dom";
import "./App.css";
import HitMarkerPage from "./pages/HitMarkerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HitMarkerPage />} />
    </Routes>
  );
}

export default App;
