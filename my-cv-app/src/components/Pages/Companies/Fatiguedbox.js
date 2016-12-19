import React from 'react';
import Skills from '../Skills/Skills.js';
export default class Fatiguedbox extends React.Component{
	render(){
		const template = {
			title: 'FatiguedBox',
			description: 'I praktik forløbet, valgte jeg med 2 andre kollegaer at starte virksomhed, med mål om at udvikle et lille spil til mobil platformen henover praktikken. I perioden valgte vi at udarbejde vores produkt igennem Unity(Game Engine) og  SCRUM for at få praktisk erfaring med udviklingsmodellen.',
			skills: [
			<Skills value={6} key={1}/>,
			<Skills value={7} key={2}/>,
			<Skills value={5} key={3}/>
			],
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