//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Page
import AdminHome from '../pages/admin/Admin';
//import AdminSignUp from '../pages/admin/SignUp';
//Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Tables from "../pages/Tables";
import Users from "../pages/admin/Users";

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
                path: "/admin/tables",
                exact: true,
                component: Tables               
            },
            {
                path: "/admin/users",
                exact: true,
                component: Users               
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