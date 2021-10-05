import React from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Header from '../Header/';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome';
import Login from '../Login';
import SignUp from '../SingUp';
import ErrorPage from '../ErrorPage';

import '../../App.css';
function App() {
  return (
      
        <BrowserRouter>
         <Header />
         
      <Switch>
        <Route exact={true} path="/" component={Landing} />
        <Route path="/Welcome" component={Welcome} />
        <Route path="/Login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={ErrorPage} />
      </Switch>
         <Footer />
        </BrowserRouter> 
      
    );
}

export default App;  