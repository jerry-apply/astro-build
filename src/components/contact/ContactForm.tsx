import * as React from 'react';

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = (
  props
) => {
  return (
    <>
      <div>
        <h3>Stay in touch!</h3>
        <div>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div>
          <button onClick={() => alert('subscribed!')}>Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
