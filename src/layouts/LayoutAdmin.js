import { Redirect, Route } from 'react-router-dom';
import { Layout } from "antd";
import "./LayoutAdmin.scss";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Main from '../components/layout/Main';
import "antd/dist/antd.css";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";
import AdminSignUp from '../pages/admin/SignUp';
import {getAccessTokenApi , getRefreshTokenApi} from '../api/auth';
import useAuth from '../hooks/useAuth';

export default function LayoutAdmin(props){
    const { routes } = props;
    const {Footer} = Layout;
    const {user, isLoading} = useAuth();
   
    //const accessToken = getAccessTokenApi();
    //const refreshToken = getRefreshTokenApi();

    if(!user && !isLoading){
        return(
            <>
                <Route key="signIn" Path="/admin/signIn" exact={true} component={AdminSignUp}></Route>                
                <Redirect  key="signInRedirect" to="/admin/signIn"></Redirect>
            </>
        );
    }

    if(user && !isLoading){
        return(
            <div className="App">
                <Main>
                    <LoadRouters routes={routes}></LoadRouters>
                </Main>
                <Footer></Footer>
            </div>
        );
    }

    return null;
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