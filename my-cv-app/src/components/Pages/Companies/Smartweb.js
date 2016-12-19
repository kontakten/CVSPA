import React from 'react';
import Skills from '../Skills/Skills.js';
export default class Smartweb extends React.Component{
	render(){
		const template = {
			title: 'Smartweb',
			description: 'Jeg arbejder på nuværende tidspunkt som frontend udvikler hos Smartweb, hvor jeg dagligt bevæger mig bredt hvad angår ansvar og opgaver. Jeg har til dagligt ansvar for estimering af nye kundeopgaver og implementering af opgaverne. Dertil flytning af webshop fra kundens nuværende E-commerce system til Smartweb og dertil korrespondance med kunden under forløbet.  Der gennemgås kvalitets tjek for hver opgave, for at ramme præciseret resultatet til kunden. Til projektstyring benytters der af ugentlig Sprint fra udviklingsmodellen SCRUM, samt daglige scrum møder. Jeg sidder primær og arbejder med Smarty (PHP template engine), samt HTML og CSS. Opgaverne spænder meget bredt og indimellem udover definitionen af frontend arbejde.',
			skills: [
			<Skills value={0} key={1}/>,
			<Skills value={1} key={2}/>,
			<Skills value={2} key={3}/>,
			<Skills value={3} key={4}/>,
			<Skills value={4} key={5}/>,
			<Skills value={5} key={6}/>
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