import App from './App';
import React from 'react';
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shollowwrapper for the counter component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App /> )

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without crashing', () => {
  const wrapper = setup();
  console.log(wrapper.debug());
});




test("chacking app component", ()=>{
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'app-component');
  expect(component.length).toBe(1)

});