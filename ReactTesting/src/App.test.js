import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from 'enzyme';



// enzyme provides adapter which activates shallow renderring
configure({adapter : new Adapter()});

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/

// test suite
describe('Testing react app', ()=>{
  // shallow render app component
  // let wrapper = shallow(<App />);  
  let wraper;

  // renderring before every it
  beforeEach(()=>{
    wrapper = shallow(<App />); 
  });

  // test case
  // if renerred content contains table : <th>
  it('should have th', ()=>{
    // exact match
      expect(wrapper.contains(<th>NAMES</th>)).toBe(true);
  });
  it('should have button', ()=>{
    expect(wrapper.containsMatchingElement(<button>Add name</button>)).toBe(true);
});

});
