import React, { Component } from 'react';
import Owner from './Owner/Owner';
import Skills from './Skills/Skills';

export default class Layout extends Component{
	render() {	
		const title = 'Welcome';
		return(
			<div>
			<h1>
				<Owner title={title} />
			</h1>
			<Skills title={title} />
			</div>
		)
	}
}