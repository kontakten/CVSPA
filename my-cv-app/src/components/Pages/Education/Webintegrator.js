import React from 'react';

export default class Webintegrator extends React.Component{
	render(){
		const template = {
			title: 'Webintegrator',
			description: 'Arbejdet primært med tekonolgien ASP.NET med MySql som database. Hovedprojekt var at finde en virksomhed der bruge en ny hjemmeside. Der stod man for hele processen, kundekontakt, design, ”slice and dice” og til sidst ende ud med et produkt efter kundes behov. Det foregik selvstændigt i 3 uger. Eksamens opgaven foregik på 1 uge. Fik et design udleveret, udarbejde en funktionel hjemmeside med eget CMS system lavet.',
			fromDate: '2007',
			ToDate: '2009'
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