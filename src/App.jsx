import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
