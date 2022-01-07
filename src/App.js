
import { OmitProps } from 'antd/lib/transfer/ListBody';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './config/routes';

//<Route path='/admin' exact={true} component={AdminHome} />

function App() {
  return (
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index++} {...route} ></RouteWithSubRoutes>
          ))}
        </Switch>
      </Router>
  );
}
function RouteWithSubRoutes(route){
  
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props} /> }
    />
  );
}

export default App;
