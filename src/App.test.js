import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import { act } from "react-dom/test-utils";
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

let container = null;
describe("App",() => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container)
  })

  afterEach(() => {
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
});
