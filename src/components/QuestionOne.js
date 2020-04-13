import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';


export default class QuestionOne extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      question: this.props.question,
	      answers: this.props.answers,
	      results: [],
	      curresults: [],
	    };
  	}

  	selectMaker(val, i) {
  		return(
  			<Button id="answers">{val}</Button>
  		);
  	}

	render() {
		let options = ["Personal", "Employee Wages", "Rent", "Taxes", "Insurance","Utilities"];
		let allOptions = options.map((val, i) => this.selectMaker(val, i));

		return(
			<div>
				<h1>{this.state.question} </h1>
				<div class="content">
					{allOptions}
				</div>
				<Button> Submit </Button>
			</div>
		);
	}

}