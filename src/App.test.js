import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import appStore from './app/store';
import App from './App';
import userEvent from '@testing-library/user-event';

const initialState = {
  todo: {
    value: [],
  }
};
function render(
  ui,
  {
    initialState,
    store = appStore,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
};

describe('To Do Testing', () => {
  beforeEach(() => {
    render(<App />);
  })

  // 1) test to render h1 tags UI
  test('renders h1 tag "To Do Test" ', () => {
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('To Do Test');
  });

  // 2) test to render submit will add onto list
  test('type word "React" then submit will add onto list', () => {
    const input = screen.getByPlaceholderText('Feed the 🐱');
    const submit = screen.getByText(/submit/i)
    userEvent.type(input, 'React');
    userEvent.click(submit);
    expect(screen.getByText(/React/i).textContent).toBe('React');
  });

  // 3) test click of check will check checkbox, and click again will remove checkbox... checking checkbox checks checkbox :D
  test('click of check will toggle checkbox true', () => {
    const checkbox = screen.getByRole('checkbox', { name: /checkbox/i });
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  // 4) test click of check update complete total + 1
  test('check of checkbox updates complete', () => {
    const checkbox = screen.getByRole('checkbox', { name: /checkbox/i });
    userEvent.click(checkbox);
    const total = screen.getByTestId('total');
    expect(total.textContent).toBe("1");
  });
  // 5) test click of check update complete total - 1
  test('uncheck of checkbox updates complete', () => {
    const checkbox = screen.getByRole('checkbox', { name: /checkbox/i });
    userEvent.click(checkbox);
    userEvent.click(checkbox);
    const total = screen.getByTestId('total');
    expect(total.textContent).toBe("0");
  });

  // 6) snapshot
  test('snapshot', () => {
    const { asFragment } = render(<Provider store={appStore}><App /></Provider>);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
})