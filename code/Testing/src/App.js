import React from 'react';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			count: 1
		}
	}
	inc(){
		this.setState({count: this.state.count+1})
	}
	render(){
		return(<div>Welcome {this.props.name}, {this.state.count } {this.props.children }
			<h1>{this.props.value }</h1> 
			<button onClick={()=>this.inc()}>Increase Count</button>
			<input type="button" value="Save" onClick={this.props.save}></input>
			</div>);
	}
}

export default App;