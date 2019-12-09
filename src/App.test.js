import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';
import { act } from "react-dom/test-utils";

let container = null;
describe("App",() => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  })

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders without crashing', () => {
    act(() => {
      render(<App />, container);
    });
    const home = document.querySelector('.home__score')
    const away = document.querySelector('.away__score')
    expect(home.textContent).toBe("0");
    expect(away.textContent).toBe("0");
  })

  it('adds to home and away score', () => {
    act(() => {
      render(<App />, container);
    });



    const home = document.querySelector('.home__score')
    const away = document.querySelector('.away__score')
    expect(home.textContent).toBe("0");
    expect(away.textContent).toBe("0");
  })
});
