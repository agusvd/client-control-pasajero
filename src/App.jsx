import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login"
import InicioChofer from "./pages/chofer/InicioChofer";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import Trabajadores from "./pages/admin/Trabajadores";
import Lista from "./pages/admin/Lista";
import Viajes from "./pages/admin/Viajes";
import Reportes from "./pages/admin/Reportes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<PrivateRoute allowedRoles={['chofer', 'admin']} />}>
          <Route path="/inicio" element={<InicioChofer />} />
        </Route>
        <Route path='/admin' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
        <Route path='admin/trabajadores' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin/trabajadores" element={<Trabajadores />} />
        </Route>
        <Route path='admin/lista' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin/lista" element={<Lista />} />
        </Route>
        <Route path='admin/viajes' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin/viajes" element={<Viajes />} />
        </Route>
        <Route path='admin/reportes' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/admin/reportes" element={<Reportes />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
