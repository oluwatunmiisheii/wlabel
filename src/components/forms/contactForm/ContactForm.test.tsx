import { create } from "react-test-renderer";
import { Input } from "../shared/input/Input";
import { Textarea } from "../shared/textarea/Textarea";
import { ContactForm } from "./ContactForm";
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from "components/button/Button";


const setup = () =>
	render(<ContactForm />);

describe(`${ ContactForm.name }`, () => {
  it('should render two input fields', async () => {
    const { root } = create(<ContactForm />);
    const inputs = await root.findAllByType(Input); 
    expect(inputs.length).toBe(2);
  })

  it('should render one input fields', async () => {
    const { root } = create(<ContactForm />);
    const inputs = await root.findAllByType(Button); 
    expect(inputs.length).toBe(1);
  })

  it('should render one textarea', async () => {
    const { root } = create(<ContactForm />);
    const inputs = await root.findAllByType(Textarea); 
    expect(inputs.length).toBe(1);
  })

  it('should update value of name input field', async () => {
    setup()
    const nameInput = screen.getByPlaceholderText<HTMLInputElement>('Enter your name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  })

  it('should update value of email input field', async () => {
    setup()
    const emailInput = screen.getByPlaceholderText<HTMLInputElement>('Enter your email');
    fireEvent.change(emailInput, { target: { value: 'tunmii@mail.com' } });
    expect(emailInput.value).toBe('tunmii@mail.com');
  })

  it('should update value of message input field', async () => {
    setup()
    const messageInput = screen.getByPlaceholderText<HTMLTextAreaElement>('What are your plans?');
    fireEvent.change(messageInput, { target: { value: 'message' } });
    expect(messageInput.value).toBe('message');
  })
})
