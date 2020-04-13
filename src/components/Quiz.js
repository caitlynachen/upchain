import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import QuestionOne from './QuestionOne';

export default class Quiz extends React.Component {


	constructor(props) {
	    super(props);

	    this.state = {
	      question: ["What costs does your business need to cover in the next few months?", "hihi"],
	      answers: [["Personal", "Employee Wages", "Rent", "Taxes", "Insurance","Utilities"],
	      ["Personal", "Employee Wages", "Rent", "Taxes", "Insurance","Utilities"] 
	      ],
	      number: 0,
	      results: [],
	      curresults: [],
	    };
  	}

  	selectMaker(val, i, type) {
  		return(
  			<Button>{val}</Button>
  		);
  	}

  	reset = (clickEvent) => {
  		alert(this.state.number);

  		let num = this.state.number;
  		if (num <= 1) {
  			this.setState(prevState => ({
        		level: prevState.number++
      		}));  
      		alert(this.state.number);
  		}
  	}


	render() {
		let n = this.state.number;
		let options = this.state.answers[n];
		let allOptions = options.map((val, i) => this.selectMaker(val, i));

		return (
			<div class="content">
				<h1>{this.state.question[n]}</h1>
				<div class="question">
					{allOptions}
				</div>
				<Button onClick={this.reset}> Submit </Button>
	      	</div>
		);
	}

}