import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactSlice';

const LABEL_IDS = {
  nameId: nanoid(),
  numberId: nanoid(),
};

const { nameId, numberId } = LABEL_IDS;

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;

    if (contact.some(e => e.name === name)) {
      alert(
        `Please, pay attentiion: Contact with name "${name}" have already included in this phonebook.`
      );
      return;
    }

    const number = e.target.elements.number.value;
    dispatch(addContact(name, number));
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <h2 className={css.formTitle}>Please, input new name & number</h2>
      <label htmlFor={nameId}>Name</label>
      <input
        className={css.formInput}
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        autoComplete="name"
      />
      <label htmlFor={numberId}>Number</label>
      <input
        className={css.formInput}
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
      />
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
};
