import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Cover from './components/Cover';
import Quiz from './components/Quiz';


function App() {
  return (
    <div class="flex-row"> 
    <link
	    rel="stylesheet"
	  	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
	  	integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
	  	crossorigin="anonymous"
	/>
    	<Switch>
	        <Route exact path="/">
	          <Cover />
	        </Route>
	        <Route exact path="/Cover">
	          <Cover />
	        </Route>
	        <Route exact path="/Quiz">
	          <Quiz />
	        </Route>
      </Switch>
    </div>
  );
}

export default App;
