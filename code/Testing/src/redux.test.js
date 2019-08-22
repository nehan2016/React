import React from 'react';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import reducer from './reducer';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});

xdescribe("Reducer test", function(){
	it("Should return payload value", function(){
  		expect(reducer({a: 'A'}, { type: 'SAVE', payload: {name: 'abc'} })).toEqual({"a": "A", "name": "abc"});
	});
});

xdescribe("mapDispatchToProps test", function(){
	it("Should change the state value", function(){
		const dispatch = jest.fn();	
		let result = {
        	type: 'SAVE', 
        	payload: { value: "value changed from mapDispatchToProps" }
      	};
		mapDispatchToProps(dispatch).save();
		expect(dispatch.mock.calls[0][0]).toEqual(result);
	});
});

describe("MapStateToProps test", function(){
	it("Should return initialState value", function(){
		expect(mapStateToProps({}).value).toBe("Prop from mapStateToProps");
	});

	it("Should return passed state value", function(){
		expect(mapStateToProps({value: 'PQR'}).value).toBe("PQR");
	});
});
