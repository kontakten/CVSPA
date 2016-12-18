import React from 'react';

export default class Owner extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			FirstName: 'Mikkel',
			LastName: 'Stensgaard'	
		};
	}

	render(){
		return(
			<h1>{this.props.staticWelcome} {this.state.FirstName} {this.state.LastName}</h1>
		)
	}
}