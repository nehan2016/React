import React, { Component } from "react";

class List extends Component{
	constructor(){
		super();
		this.state = {
			items: [{email: "nareshit@gmail.com"}]
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
				<ol>{
					this.state.items.map((user, index)=><li key={index}>{user.email}</li>)
				}</ol>
				<button onClick={()=>this.fetchData()}>Load Data</button>
			</div>
		)
	}
}

export default List;