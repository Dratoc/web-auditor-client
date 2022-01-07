import { Route } from 'react-router-dom';
import { Layout } from "antd";
import "./LayoutAdmin.scss";
import routes from '../config/routes';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

export default function LayoutAdmin(props){
    const { routes } = props;
    const {Header, Content, Footer} = Layout;

    return(
        <Layout>
            <h2>Menu Sider Admin</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>
                    <LoadRouters routes={routes}></LoadRouters>
                </Content>
                <Footer>Hernan Moreno</Footer>
            </Layout>
        </Layout>
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