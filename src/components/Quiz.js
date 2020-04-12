import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap';
import { ReactTypeformEmbed } from 'react-typeform-embed';


export default class Quiz extends React.Component {

	render() {
		return (
			<ReactTypeformEmbed url="https://caitlynachen.typeform.com/to/AunVi6" />
		);
	}

}