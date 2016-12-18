import React from 'react';
import Skills from '../Skills/Skills.js';
export default class Atriumweb extends React.Component{
	render(){
		const template = {
			title: 'AtriumWeb',
			description: 'Ansøgt ud hos atriumweb som webudvikler/webdesigner. I processen som web desginer, fik man en sag og udfra denne sag havde kunden specifikke ønsker og man havde dertil stor frihed for designet. Hjemmesiderne er udarbejdet i CMS systemet Joomla, med diverse extensions.',
			skills: [<Skills value={1} key={0}/>, <Skills value={2} key={1}/>, <Skills value={3} key={2}/>],
			fromDate: '2014',
			ToDate: '2015'
		};
		
		return(
			<div className="text-left">
				<h3>
					{template.title}
				</h3>
				<strong>Description: </strong><br/><br/>
				<p>{template.description}</p><br/>
				<h3>Skills: </h3><br/>
				{template.skills}
				<h3>Duration: </h3><br/>
				{template.fromDate} - {template.ToDate}
			</div>
		)
	}
}