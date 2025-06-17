import { useState, useContext, useEffect } from 'react';
import { ContactContext } from './ContactContext';

const ContactForm = () => {
  const { addContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    console.log('Form data changed:', formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      addContact(formData);
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
