import React from 'react';

export default class Personal extends React.Component{
	render(){
		const personalQuali = 'Jeg er som person utrolig glad og positiv i hverdagen, da jeg ofte omgås personer med godt humør. Jeg er mere en person der vil have tingene er planlagt fremfor tingene kommer spontant til mig, dog sker det at jeg gerne hopper med flokken når der skal ske spontant. Ser mig selv meget kreativ og idérig når der skal skabes noget nyt innovativt. ';
		
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 text-left">
						<p>{personalQuali}</p>
					</div>
				</div>
			</div>
		)
	}
}