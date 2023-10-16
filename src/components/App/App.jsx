import css from './app.module.css';
import { ContactForm, Filter, ContactList } from 'components';

export const App = () => {
  return (
    <div className={css.mainDiv}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.mainTitleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
