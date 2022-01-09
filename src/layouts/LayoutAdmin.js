import { Redirect, Route } from 'react-router-dom';
import { Layout } from "antd";
import "./LayoutAdmin.scss";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import routes from '../config/routes';
import Main from '../components/layout/Main';
import "antd/dist/antd.css";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";
import AdminSignUp from '../pages/admin/SignUp';
import AdminSignIn from '../pages/admin/SignIn';

export default function LayoutAdmin(props){
    const { routes } = props;
    const {Header, Content, Footer} = Layout;

    const user = null;

    if(!user){
        return(
            <>
                <Route Path="/admin/login" exact={true} component={AdminSignUp}></Route>                
                <Redirect to="/admin/login"></Redirect>
            </>
        );
    }

    return(
        <div className="App">
            <Main>
                <LoadRouters routes={routes}></LoadRouters>
            </Main>
            <Footer>Hernan Moreno</Footer>
        </div>
    );
}

function LoadRouters({routes}){
    return(
        <Switch>
            {
                routes.map((route, index ) => (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))
            }
        </Switch>
    )

}