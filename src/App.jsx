import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GetInTouch from "./pages/GetInTouch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/contact" Component={GetInTouch} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
