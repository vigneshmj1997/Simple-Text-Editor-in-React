import React from 'react';

class TopBar extends React.Component
{


	render()
	{
		return(
			<div style={{marginBottom:"15px"}}>
				<button onClick={this.props.bold} className="btn btn-primary"><strong>B</strong></button>
				<button onClick={this.props.underline} className="btn btn-primary"><u>U</u></button>
				<button onClick={this.props.italics} className="btn btn-primary"><em>I</em></button>
				<button onClick={this.props.highligth} className="btn btn-primary">Code</button>
			</div>
			)
	}
}
export default TopBar;