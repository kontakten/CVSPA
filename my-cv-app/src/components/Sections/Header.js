import React from 'react';
import Owner from '../Owner/Owner';

export default class Header extends React.Component{
	render(){
		const staticHeadline = 'Curriculum Vitae of';
		return(
			<Owner staticWelcome={staticHeadline} />
		)
	}
}