import {

BrowserRouter,

Routes,

Route,

} from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

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

<Route

path="/"

element={<AppLayout />}

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