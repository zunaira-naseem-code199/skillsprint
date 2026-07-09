import {

BrowserRouter,

Routes,

Route,

} from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import AppLayout from "./layouts/AppLayout";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Goals from "./pages/Goals";

import Tasks from "./pages/Tasks";

import Journal from "./pages/Journal";

import Certificates from "./pages/Certificates";

import Profile from "./pages/Profile";

import Settings from "./pages/Settings";

function App() {

return (

<BrowserRouter>

<Routes>

  {/* Authentication Routes */}

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/register"
    element={<Register />}
  />

  {/* Protected Application */}

  <Route
  path="/"
  element={
    <ProtectedRoute>
      <AppLayout />
    </ProtectedRoute>
  }
>
    <Route
      index
      element={<Dashboard />}
    />

    <Route
      path="goals"
      element={<Goals />}
    />

    <Route
      path="tasks"
      element={<Tasks />}
    />

    <Route
      path="journal"
      element={<Journal />}
    />

    <Route
      path="certificates"
      element={<Certificates />}
    />

    <Route
      path="profile"
      element={<Profile />}
    />

    <Route
      path="settings"
      element={<Settings />}
    />

  </Route>

</Routes>

</BrowserRouter>

);

}

export default App;