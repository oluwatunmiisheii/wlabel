import { Button } from 'components/button/Button';
import { FC, useState } from 'react';
import { Input } from '../shared/input/Input';
import { Textarea } from '../shared/textarea/Textarea';

interface Props {
  
}

const formValues = {
  name: '',
  email: '',
  message: '',
}
 
export const ContactForm: FC<Props> = () => {
  const [values, setValues] = useState<{[key: string]: string}>(formValues);

  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value});
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  }

  return ( 
    <form onSubmit={submitForm}>
      <Input
        labelText="Full Name"
        name="name"
        id="name"
        required
        placeholder="Enter your name"
        onChange={updateInputValue}
        value={values.name}
      />
      <Input
        labelText="Email"
        name="email"
        id="email"
        placeholder="Enter your email"
        type="email"
        onChange={updateInputValue}
        required
        value={values.email}
      />
      <Textarea 
        labelText="Message"
        name="message"
        id="message"
        placeholder="What are your plans?"
        onChange={updateInputValue}
        required
        value={values.message}
      />
      <Button type="submit" variant="primary" size='medium'>
        Send Message
        <svg 
          className="w-6 h-6 ml-2" 
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </Button>
    </form>
  );
}
