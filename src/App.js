import React from 'react';
import './App.css';
import Header from './compononents/Header/Header';
import Shop from './compononents/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './compononents/Review/Review';
import Inventory from './compononents/Inventory/Inventory';
import Notfound from './compononents/Notfount/Notfound';
import Productdetails from './compononents/Prodeucdetails/Productdetails';


function App() {
  return (
    <div >
      <Header></Header>
      
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:productKey">
            <Productdetails></Productdetails>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
