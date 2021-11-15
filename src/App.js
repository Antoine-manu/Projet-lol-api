import React from "react";
import logo from './logo.svg';
import './App.css';
import Chartercall from './react/chartercall';
import Lonelychar from './react/lonelychar';
import Footer from './react/components/footer';
import Navigation from './react/components/navigation';
import Acceuil from './react/acceuil';
import { BrowserRouter as Router, Switch ,Route } from "react-router-dom";


function App() {
  return (
      <Router>
        <nav>
        <Navigation/>
				</nav>
        <main>
					<Switch>
          <Route path="/" exact component={Acceuil} />
					<Route path="/list" exact component={Chartercall} />
					<Route path="/charactere/:name" component={Lonelychar} />
          </Switch>
          </main>
      </Router>
  );
}

export default App;
