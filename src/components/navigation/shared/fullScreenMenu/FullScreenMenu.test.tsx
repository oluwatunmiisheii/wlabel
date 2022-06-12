import { FullScreenMenu } from "./FullScreenMenu";
import { ComponentProps } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const close = jest.fn();

const defaultProps: ComponentProps<typeof FullScreenMenu> = {
  close,
};

const setup = (props: ComponentProps<typeof FullScreenMenu> = defaultProps) =>
  render(
    <MemoryRouter>
      <FullScreenMenu {...props} />
    </MemoryRouter>
  );


describe(`${FullScreenMenu.name}`, () => {
  it('should call toggle', () => {
    setup();
    const button = screen.getByRole<HTMLButtonElement>('button', {hidden: true});
    fireEvent.click(button);
    expect(close).toHaveBeenCalledTimes(1);
  });

  it.each(['store', 'tutorials', 'contact', 'blogs'])("should redirect to '/' when link is clicked", (link) => {
    setup();
    const routeLink = screen.getByText(link);
    fireEvent.click(routeLink);
    expect(window.location.pathname).toBe('/');
  });
});