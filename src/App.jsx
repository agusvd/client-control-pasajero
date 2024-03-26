import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import InicioChofer from "./pages/chofer/InicioChofer";
import Dashbaord from "./pages/admin/Dashbaord";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<InicioChofer />} />
        <Route path="/admin" element={<Dashbaord/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
