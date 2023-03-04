import { Outlet, useNavigate } from "@solidjs/router";
import { createMemo } from "solid-js";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const isAuthenticated = createMemo(() => JSON.parse(localStorage.getItem("isAuthenticated")));
    // console.log(isAuthenticated());
    if (isAuthenticated() === true) {
        return <Outlet />
    }
    return navigate('/login');
}

export default ProtectedRoute;