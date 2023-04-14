import { screen } from "@storybook/testing-library";
import { render } from '@testing-library/react'
import App from "./App"

describe('App', () => {
  it('render', () => {
    render(<App />);

    expect(screen.getByText('hello world')).toBeInTheDocument();
  })
})