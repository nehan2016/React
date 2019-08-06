import React, { Component, useState, useEffect } from "react";
import Card from '../Card/Card';


function FunctionalComponent(props) {
	let [count, setCount] = useState(0);
	let buttonRef = React.createRef();
	useEffect(
		()=>{ 
			console.log("After count = ", count);
			console.dir(buttonRef);
			if(count>3){ buttonRef.current.textContent = "Increment";  }
			return function(){ 	console.log("Before count =",count);  }
		}
		);

	return (<div>
		{props.msg} - {count}
		<button ref={buttonRef} onClick={()=>setCount(count+1)}>++</button>
		</div>);
}

class List extends Component{
	constructor(){
		super();
		this.state = {
			items: [{name: "nareshit", phone: 123456789, website:"#"}],
			count:0
		}
	}
	componentDidMount(){
		console.log("***After", this.state.count);
	}
	componentWillMount(){
		console.log("***Before", this.state.count);
	}
	componentDidUpdate(){
		console.log("***After", this.state.count);
	}
	componentWillUpdate(){
		console.log("***Before", this.state.count);
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
				<button onClick={(e)=>{
					this.setState({count: this.state.count+1});
			}}>List++{this.state.count}</button>
				<FunctionalComponent  msg="some value passing from prop"/>
				<button style={ { display:"block" } } onClick={()=>this.fetchData()}>Load Data</button>
				{
					this.state.items.map((user, index)=> (<Card key={index} user={user}/>))
				}
			</div>
		)
	}
}

export default List;