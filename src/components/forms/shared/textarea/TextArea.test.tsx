import { Textarea } from './Textarea';
import { Label } from '../label/Label';
import { ComponentProps } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';

const onChange = jest.fn();
const defaultProps = {
  id: 'id',
  labelText: 'labelText',
  name: 'name',
  placeholder: 'placeholder',
  onChange,
  value: 'value',
};

const setup = (props: ComponentProps<typeof Textarea> = defaultProps) =>
	render(<Textarea {...props} />);


describe(`${Textarea.displayName}`, () => {
  it('should render', () => {
    setup();
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  it('should render a label', async () => {
    setup();
    expect(screen.getByText('labelText')).toBeInTheDocument();

    const { root } = create(<Textarea {...defaultProps} />);
    const label = await root.findByType(Label);
    expect(label.props.htmlFor).toBe('id');
  });

  it('should call onChange', () => {
    setup();
    const input = screen.getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it.each(['id1', 'id2', 'id3'])('label htmlFor value should have id passed as props', async (id) => {
    const { root } = create(<Textarea {...{...defaultProps, id }} />);
    const label = await root.findByType(Label);
    expect(label.props.htmlFor).toBe(id);
  })
});