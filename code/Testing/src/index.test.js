import React from 'react';
import App from './App';
import ConnectedApp from './ConnectedApp';
import Enzyme, {shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});

xdescribe("Snapshot test", function(){
	it("Should not change the view", function(){
		const tree = renderer.create(<App name="abc"><h1>hi</h1></App>).toJSON();
  		expect(tree).toMatchSnapshot();
	});
});

xdescribe("Component Test", function(){
	chai.use(chaiEnzyme());
	const expect = chai.expect;

	describe("Props test", function(){
		it("Should match prop value", function(){
			const wrapper = mount(<App name="Some name" />);
			expect(wrapper.props().name).to.equal('Some name');
		});
	});

	describe("State test", function(){
		it("Should State change", function(){
			const wrapper = mount(<App/>);
			expect(wrapper.state().count).to.equal(1);
		});
	});

	describe("Childre test", function(){
		it("Should have childre", function(){
			const wrapper = mount(<App><span>children</span></App>);
			expect(wrapper.find('span').length).to.equal(1);
		});
	});

	describe("State test", function(){
		it("Should State change", function(){
			const wrapper = mount(<App/>);
			wrapper.find('button').simulate('click');
			expect(wrapper.state().count).to.equal(2);
			wrapper.find('button').simulate('click');
			expect(wrapper.state().count).to.equal(3);
			wrapper.find('button').simulate('click');
			expect(wrapper.state().count).to.equal(4);
		});
	});	

	describe("Connected Component test", function(){
		it("Should State change", function(){
			const initialState = { value: 'Prop from mapStateToProps' }; 
			let mockStore = configureMockStore();
			let store = mockStore(initialState)
			const wrapper = mount(<ConnectedApp store={store}/>);
			expect(wrapper.find('h1').text()).to.equal('Prop from mapStateToProps');
		});
	});	

	describe('async actions', () => {
	  it('should dispatch actions of ConstantA and ConstantB', () => {
	  	const middlewares = [thunk];
		const mockStore = configureMockStore(middlewares);
	    const store = mockStore({ })
	    store.dispatch(function(){ store.dispatch({type: 'action_name'}); })
	    expect(store.getActions()[0].type).to.equal('action_name');
	  })
	})


});