import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import Quiz from './Quiz';
import { Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom'

export default class Cover extends React.Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	      redirect: null,
	    };
  	}

  	quiz = (clickEvent) => {
        this.setState({ redirect: "/Quiz" });
  	}

	render() {
		if (this.state.redirect) {
        	return <Redirect to={this.state.redirect} />
      	}
		return (
			<div class="content">
	      		<img id="logo" src={require("../imgs/logopink.png")}/>
		        <NavLink to="/Quiz" className="nes-btn is-primary">Start</NavLink>
	      	</div>
		);
	}

}