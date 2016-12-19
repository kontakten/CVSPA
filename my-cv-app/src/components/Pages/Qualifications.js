import React from 'react';
import Skills from './Skills/Skills';

export default class Qualifications extends React.Component{
	render(){
		const skills = [
			<Skills value={0} key={1}/>,
			<Skills value={1} key={2}/>,
			<Skills value={2} key={3}/>,
			<Skills value={3} key={4}/>,
			<Skills value={4} key={5}/>,
			<Skills value={5} key={6}/>,
			<Skills value={6} key={7}/>,
			<Skills value={7} key={8}/>
		];

		const listItems = skills.map((skill, index) =>
		  <div key={index} className="col-xs-12 col-sm-4 col-md-4 text-center">
		    {skill}
		  </div>
		);

		const headline = <h3>Qualifications:</h3>;

		const skillHeadline = <h4>Skills:</h4>;

		const ITQuali = 'Fagligt ser jeg mig uddannet til at kunne stå for hele processen. Har tidligere stået til ansvar for at starte fra punkt nul, til at få det ført ud på internettet. Er meget tålmodig og fokuseret på opgaven, og hvis der opstår forhindringer i processen, ser jeg mig selv meget løsningsorienteret. Er stærk i at finde alternativ løsninger med samme resultat.  Er glad for selvstændigt arbejde, hvor der kan koncentreres på kundens opgave. Føler mig derimod også meget social, og føler jeg er god til at komme med nye inputs og generelt en god sparringspartner for størrer projekter.';
		
		return(
		
		<div className="container">
				{headline}
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 text-left">
						<p>{ITQuali}</p>
					</div>
					{skillHeadline}
					<div className="col-xs-12 col-sm-12 col-md-12 text-center">
						{listItems}
					</div>
				</div>
			</div>
		)
	}
}
