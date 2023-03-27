import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Uniwerr from './pages/Uniwerr';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/uniwerr" element={<Uniwerr />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;