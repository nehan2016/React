import React, { Component } from 'react';
import './Card.css'
class Card extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div className="card">
			<p>{this.props.user.name}</p>
			<p>Phone: <span>{this.props.user.phone}</span></p>
			<a href={this.props.user.website}>Website</a>
		</div>);
	}
}

export default Card;