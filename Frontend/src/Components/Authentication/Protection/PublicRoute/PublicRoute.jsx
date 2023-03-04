import { Outlet, useNavigate } from "@solidjs/router";
import { createMemo } from "solid-js";

const publicRoute = () => {
    const navigate = useNavigate();
    const isAuthenticated = createMemo(() => JSON.parse(localStorage.getItem("isAuthenticated")));
    // console.log(isAuthenticated());
    if (isAuthenticated() === true) {
        return navigate('/todo');
    }
    return <Outlet />
}

export default publicRoute;