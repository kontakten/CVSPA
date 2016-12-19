import React from 'react';

export default class Hjem extends React.Component{
	render(){
		const template = {
			title: 'Hjem.dk',
			description: 'Projekt hos Smartweb. Stod som ansvarlig for opsætning af responsive webshop hos kundens løsning, med tilføjelse af custom funktionaliteter',
			fromDate: 'October 2015',
			ToDate: 'October 2015'
		};
		
		return(
			<div className="text-left">
				<h3>
					{template.title}
				</h3>
				<strong>Description: </strong><br/><br/>
				<p>{template.description}</p><br/>
				<h3>Duration: </h3><br/>
				{template.fromDate} - {template.ToDate}
			</div>
		)
	}
}