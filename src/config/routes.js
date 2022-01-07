//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Page
import AdminHome from '../pages/admin/Admin';
import AdminSignIn from '../pages/admin/SignIn';

//Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

const routes=[
    {
        path: "/admin",
        exact: false,
        component: LayoutAdmin,        
        routes: 
        [
            {
                path: "/admin",
                exact: true,
                component: AdminHome               
            },
            {
                path: "/admin/login",
                exact: true,
                component: AdminSignIn                
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/",
        exact: false,
        component: LayoutBasic,        
        routes: 
        [
            {
                path: "/",
                exact: true,
                component: Home               
            },
            {
                path: "/contact",
                exact: true,
                component: Contact                
            },
            {
                component: Error404
            }
        ]
    }

]

export default routes;