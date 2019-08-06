import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import List from './components/List/List';


function App() {
  function handleClick(){
  	alert('Clicked');
  }
  return (
    <div className="App">
        <CustomButton name="Submit" clickHandler={handleClick}></CustomButton>
        <CustomButton name="Clear" clickHandler={handleClick}></CustomButton>
    	  <CustomButton name="Children" clickHandler={handleClick}>
    	  		<h1>I'm children of a CustomButton</h1>
    	  </CustomButton>
    	  <hr/>
        <List />
        <hr/>
    </div>
  );
}

export default App;
