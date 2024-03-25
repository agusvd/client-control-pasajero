import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import InicioChofer from "./pages/chofer/InicioChofer";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<InicioChofer />} />
        <Route path="/admin" element={<h1>Admin</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
