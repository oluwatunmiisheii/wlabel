import { Hamburger } from "./Hamburger";
import { ComponentProps } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const toggle = jest.fn();

const defaultProps: ComponentProps<typeof Hamburger> = {
  toggle,
};

const setup = (props: ComponentProps<typeof Hamburger> = defaultProps) =>
  render(<Hamburger {...props} />);


describe(`${Hamburger.name}`, () => {
  it('should call toggle', () => {
    setup();
    const button = screen.getByRole<HTMLButtonElement>('button', {hidden: true});
    fireEvent.click(button);
    expect(toggle).toHaveBeenCalledTimes(1);
  });
})