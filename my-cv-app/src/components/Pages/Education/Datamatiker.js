import React from 'react';

export default class Datamatiker extends React.Component{
	render(){
		const template = {
			title: 'Datamatiker',
			description: 'På datamatiker uddannelsen introduceres man til programmering indenfor software og spil udvikling i programmeringssproget C# og C++. Programmering kombineres med system udvikling der bidrager med en stor analyse del der er med til at forstå hvordan man løser et problem for en kunde. Dertil bliver man bekendt med projektstyring og arbejdsprocess i form af SCRUM, XP og vandfaldsmodellen. Dette er med til at give et indblik i hvordan en daglig dag i en hver virksomhed arbejder med iterative møder og projekt planlægning. Teknologi og netværk er et fag i forløbet som giver et indtryk i hvordan hardwaren fungere sammen med software, og dertil får man en dyb forståelse i hvordan data transporteres fra a til b.',
			fromDate: '2012',
			ToDate: '2014'
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