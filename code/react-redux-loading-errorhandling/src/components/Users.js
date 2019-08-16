import React, { Component } from 'react';
import loadIcon from './loading.gif';
import './style.css';
class Users extends Component{
	constructor(){
		super();
		this.state = {
			data: [],
			loading: false,
			error: null
		}
	}
	fetchData(){
		this.showLoader();
		setTimeout(()=>{
			fetch('https://jsonplaceholder.typicode.com/users')
	  		.then(response => response.json())
	  		.then(json => {
	  				this.setState({data:json})
					this.hideLoader();
	  			}
	  		)
	  		.catch((err)=>{
	  			this.showError(err)
	  		})
  		}, 5000);
	}
	showLoader(){
		this.setState({loading:true});
	}
	hideLoader(){
		this.setState({loading:false});
	}
	showError(msg){
		this.setState({
			loading: false,
			error: {
				message: msg || 'Something went wrong'
			}
		});
	}
	hideMessage(){
		this.setState({
			error: null
		});
	}
	render(){
		return (
			<div>
				{ (this.state.error && this.state.error.message) ?  <div className="error">
						{this.state.error.message}
							<span className="closeButton" onClick={()=>this.hideMessage()}>&#10006;</span>
					</div>:''}
				{ this.state.loading ? <img src={loadIcon} className="loading"/> : '' }
				<ul>
					{(this.state.data && this.state.data instanceof Array )?
						this.state.data.map((user,i)=><li keys={i}>{user.name}</li>):''
					}
				</ul>
				<br/>
				<br/>
				<button onClick={()=>this.fetchData()}>Fetch Data</button>
				<button onClick={()=>this.showLoader()}>ShowLoader</button>
				<button onClick={()=>this.showError()}>Error</button>
			</div>
		);
	}
}
export default Users;