
import { Route, Routes } from '@solidjs/router';
import { lazy } from "solid-js";
import Login from "./Components/Authentication/Login/Login";
import { ProtectedRoute, PublicRoute } from './Components/Authentication/Protection';
import SignOut from "./Components/Authentication/SignOut/SignOut";

const Home = lazy(() => import("./Components/Pages/Home/Home"));

function App() {


  return (
    <Routes>
      <Route path="" component={ProtectedRoute}>
        <Route path="/todo" component={Home} />
      </Route>

      <Route path="" element={PublicRoute} >
        <Route path={['/', '/login']} element={Login} />
        <Route path="/signOut" element={SignOut} />
      </Route>
    </Routes>
  );
}




export default App;
