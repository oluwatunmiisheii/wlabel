import { ContactForm } from "components/forms/contactForm/ContactForm";
import { Section } from "components/section/Section";

export const ContactSection = () => {
  return (
    <Section theme="grey">
      <div className='w-full grid grid-cols-1 lg:grid-cols-8 mx-auto'>
        <div className='col-span-8 lg:col-start-2 lg:col-span-6'>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

