import { Button } from "components/button/Button";
import { Input } from 'components/forms/shared/input/Input';
import { Textarea } from 'components/forms/shared/textarea/Textarea';

function App() {
  return (
    <div>
      <Input
        labelText="Email"
        name="email"
        id="email"
        placeholder="Enter your email"
        type="email"
        onChange={() => {}}
        value="email"
      />
      <Textarea 
        labelText="Message"
        name="message"
        id="message"
        placeholder="What are your plans?"
        onChange={() => {}}
        value="message"
      />
     <Button type="submit" variant="primary" size='medium'>
        Send Message
      </Button>
    </div>
  );
}

export default App;
