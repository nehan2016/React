import React, { Component } from "react";
import Card from '../Card/Card';
class List extends Component{
	constructor(){
		super();
		this.state = {
			items: [{name: "nareshit", phone: 123456789, website:"#"}]
		}
	}
	fetchData(){
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response => response.json())
		  .then(json => 
		  	{
		  		console.log(json);
		  		this.setState({items: json});
		  	})
	}
	render(){
		return (
			<div>
				<button style={ { display:"block" } } onClick={()=>this.fetchData()}>Load Data</button>
				{
					this.state.items.map((user, index)=> (<Card key={index} user={user}/>))
				}
			</div>
		)
	}
}

export default List;