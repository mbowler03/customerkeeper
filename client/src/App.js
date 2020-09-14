import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Navbar from './components/layouts/Navbar.js'
import Home from './components/layouts/Home.js'
import About from './components/layouts/About.js'
import Footer from './components/layouts/Footer.js'
import "./App.css";

const App = ()=>{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>        
            <Route exact path="/about" component={About}/>        
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
