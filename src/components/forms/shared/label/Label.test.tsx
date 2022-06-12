import { Label } from './Label';
import { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';

const defaultProps = {
  htmlFor: 'id',
  labelText: 'labelText',
};

const setup = (props: ComponentProps<typeof Label> = defaultProps) =>
	render(<Label {...props} />);

describe(`${Label.name}`, () => {
  it('should render labelText passed as props', () => {
    setup();
    expect(screen.getByText('labelText')).toBeInTheDocument();
  });

  it.each(['id1', 'id2', 'id3'])('should have htmlFor value be passed as props', async (id) => {
    setup({...defaultProps, htmlFor: id});
    expect(screen.getByText('labelText')).toHaveAttribute('for', id);
  })
});