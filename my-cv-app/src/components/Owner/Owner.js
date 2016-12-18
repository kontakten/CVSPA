import React, { Component } from 'react';

export default class Owner extends Component{
	constructor() {
		super();
		this.state = { 
			forName: 'Mikkel',
			lastName: 'Stensgaard'
		 };
	}

	render() {
		return(
			<span>{this.props.title} {this.state.forName} {this.state.lastName}</span>
		);
	}
}