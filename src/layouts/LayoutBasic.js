import { Layout } from "antd";
import { Route, Switch } from 'react-router-dom';
import './LayoutBasic';

export default function LayoutBasic(props){
    const { routes } = props;
    const {Content, Footer} = Layout;

    return(
        <Layout>
            <h2>Menu Sider Admin</h2>
            <Layout>
                <Content>Routes Basic.....
                    <LoadRouters routes={routes}></LoadRouters>
                </Content>
                <Footer></Footer>
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
