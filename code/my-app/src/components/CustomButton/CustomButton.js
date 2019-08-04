import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css';

class CustomButton extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<span>
				<button onClick={this.props.clickHandler}>{this.props.name}</button>
				{this.props.children}
			</span>
			)
	}
}

CustomButton.defaultProps = {
	name: "Default Button Name",
	clickHandler: function(){ alert("Default Click Handler"); }
}

CustomButton.propTypes = {
	name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
	clickHandler: PropTypes.func
}

export default CustomButton;