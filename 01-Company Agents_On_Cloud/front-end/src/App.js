import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Buyer from "./components/Buyer";
import Seller from "./components/Seller";
import CreateReservation from "./components/createReservation";
import IdSeller from "./components/IdSeller"
import CreateSeller from "./components/CreateSeller";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Buyer />
        </Route>
        <Route exact path="/Seller">
          <Navbar />
          <Seller />
        </Route>
        <Route exact path="/AddSeller">
          <Navbar />
          <CreateSeller />
        </Route>
        <Route exact path="/createReservation/:id_seller" component={CreateReservation}>
          <Navbar />
          <CreateReservation />
        </Route>
        <Route exact path="/IdSeller/:id_seller" component={IdSeller}>
          <Navbar />
          <IdSeller />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
