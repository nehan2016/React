import React, { Component } from 'react';
import loadIcon from './loading.gif';
import { connect } from 'react-redux';
import './style.css';
class Users extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: [],
			loading: false,
			error: null
		}
	}
	fetchData(){
		this.showLoader();
		this.props.getData();
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
	shouldComponentUpdate(){
		if( this.props.users && this.props.users.error){
			return false;
		}
		return true;
	}
	hideMessage(){
		this.setState({
			error: null
		});
	}
	render(){
		return (
			<div>
				{ (this.props.users && this.props.users.error ) ?  <div className="error">
						{this.props.users.error}
							<span className="closeButton" onClick={()=>this.hideMessage()}>&#10006;</span>
					</div>:''}
				{ this.state.loading && !this.props.users ? <img src={loadIcon} className="loading"/> : '' }
				<ul>
					{(this.props.users && this.props.users instanceof Array )?
						this.props.users.map((user,i)=><li key={i}>{user.name}</li>):''
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

const mapStateToProps = state => ({
  users: state.usersState.users
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
  	fetch('https://jsonplaceholder.typicode.com/users1')
              .then(response => {
                if(response.status!==200){
                  dispatch({ type: 'Error', payload: {error: 'PQR'} })
                }
                return response.json();
              })
              .then(json => {
                  dispatch({ type: 'USER_DATA_RECEIVED', payload: json })
                }
              )
              .catch((err)=>{
                
              });
          
          }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);