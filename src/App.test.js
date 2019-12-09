import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act } from "react-dom/test-utils";

let container = null;
it('renders without crashing', () => {
  beforeEach(()=>{
    container = document.createElement('div');
    document.appendChild(container)
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  })

  afterEach(() => {
    // cleanup on exiting
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  


});
