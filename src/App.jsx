import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login"
import InicioChofer from "./pages/chofer/InicioChofer";
import Dashboard from "./pages/admin/Dashboard";
import NotFound from "./pages/NotFound";
import Personal from "./pages/admin/Personal";
import FormConductor from "./pages/admin/FormConductor";
import FormTrabajador from "./pages/admin/FormTrabajador";
import FormVehiculo from "./pages/admin/FormVehiculo";
import ListaIda from "./pages/chofer/ListaIda";
import ListaVuelta from "./pages/chofer/ListaVuelta";
import Reportes from "./pages/admin/Reportes";
import EditarVehiculo from "./pages/admin/EditarVehiculo";
import EditarConductor from "./pages/admin/EditarConductor";
import EditarTrabajador from "./pages/admin/EditarTrabajador";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<PrivateRoute allowedRoles={['chofer', 'admin']} />}>
          <Route path="/inicio" element={<InicioChofer />} />
        </Route>
        <Route path="/inicio/lista-ida" element={<PrivateRoute allowedRoles={['chofer', 'admin']} />}>
          <Route path="/inicio/lista-ida" element={<ListaIda />} />
        </Route>
        <Route path="/inicio/lista-vuelta" element={<PrivateRoute allowedRoles={['chofer', 'admin']} />}>
          <Route path="/inicio/lista-vuelta" element={<ListaVuelta />} />
        </Route>
        <Route path='/panel' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel" element={<Dashboard />} />
        </Route>
        <Route path='/panel/personal' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal" element={<Personal />} />
        </Route>
        <Route path='/panel/personal/nuevo-trabajador' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/nuevo-trabajador" element={<FormTrabajador />} />
        </Route>
        <Route path='/panel/personal/editar-trabajador/:id' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/editar-trabajador/:id" element={<EditarTrabajador />} />
        </Route>
        <Route path='/panel/personal/nuevo-conductor' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/nuevo-conductor" element={<FormConductor />} />
        </Route>
        <Route path='/panel/personal/editar-conductor/:id' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/editar-conductor/:id" element={<EditarConductor />} />
        </Route>
        <Route path='/panel/personal/nuevo-vehiculo' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/nuevo-vehiculo" element={<FormVehiculo />} />
        </Route>
        <Route path='/panel/personal/editar-vehiculo/:id' element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="/panel/personal/editar-vehiculo/:id" element={<EditarVehiculo />} />
        </Route>
        <Route path="/panel/reportes" element={<PrivateRoute allowedRoles={['admin']}/>}>
          <Route path="/panel/reportes" element={<Reportes />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
