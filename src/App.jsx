import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login"
import InicioChofer from "./pages/chofer/InicioChofer";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import Personal from "./pages/admin/Personal";
import NuevoConductor from "./pages/admin/NuevoConductor";
import NuevoTrabajador from "./pages/admin/NuevoTrabajador";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<PrivateRoute allowedRoles={['chofer', 'admin']} />}>
          <Route path="/inicio" element={<InicioChofer />} />
        </Route>
        <Route path='/panel' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel" element={<Dashboard />} />
        </Route>
        <Route path='/panel/personal' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal" element={<Personal />} />
        </Route>
        <Route path='/panel/personal/nuevo-trabajador' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/nuevo-trabajador" element={<NuevoTrabajador />} />
        </Route>
        <Route path='/panel/personal/nuevo-conductor' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/nuevo-conductor" element={<NuevoConductor />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
