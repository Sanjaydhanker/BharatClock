import { BrowserRouter, Routes, Route } from "react-router-dom";
import BharatClock from "./bharatClock/BharatClock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<BharatClock />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
