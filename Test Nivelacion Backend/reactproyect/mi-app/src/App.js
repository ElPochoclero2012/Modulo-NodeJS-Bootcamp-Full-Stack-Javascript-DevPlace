import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blank from './components/Blank';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blank />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
