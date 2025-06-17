import { ContactProvider } from './ContactContext';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './index.css';

const App = () => {
  return (
    <ContactProvider>
      <div className="app-container">
        <h1>Contact Card App</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;
