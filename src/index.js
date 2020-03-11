import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Links/Home'
import Chart from './Components/Links/Chart'
import Test from './Components/Links/Test'
import Vision from './Components/Links/Vision'
import Valve from './Components/Links/Valve'
import Support from './Components/Links/Support'
import Calculator from './Components/Links/Calculator'
import BaseLayout from './Components/BaseLayout'
import './Components/Menu/styles.css'
import SemanticCal from './Components/Links/SemanticCal'
ReactDOM.render(
<BrowserRouter>  
  <BaseLayout>
    <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = "/ezchart" component = {Chart}/>
      <Route  path = "/eztest" component = {Test}/>
      <Route exact path = "/ezvision" component = {Vision}/>
      <Route exact path = "/ezvalve" component = {Valve}/>
      <Route exact path = "/support" component = {Support}/>
  <Route exact path = "/calculator" component = {SemanticCal}/>
    </Switch>
  </BaseLayout> 
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
