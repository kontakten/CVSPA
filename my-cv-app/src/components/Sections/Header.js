import React from 'react';
import Owner from '../Owner/Owner';

export default class Header extends React.Component{
	render(){
		const staticHeadline = 'Welcome to';
		return(
			<Owner staticWelcome={staticHeadline} />
		)
	}
}