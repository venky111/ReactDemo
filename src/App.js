import React from 'react';
import Registration from './components/registration'
import Login from './components/login'
import Main from './components/main'
import Home from './components/home'
import {Route,BrowserRouter,Switch} from 'react-router-dom'

class App extends React.Component {
 render() {
 return (

   <BrowserRouter>
    <div className="App">
    <Main/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/Registration' component={Registration}></Route>
        <Route exact path='/Login' component={Login}></Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
