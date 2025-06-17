import { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact-card">
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
