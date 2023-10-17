import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactElement } from 'components';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  function filteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  return (
    <ul>
      {filteredContacts().map(contact => {
        return (
          <ContactElement
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          ></ContactElement>
        );
      })}
    </ul>
  );
};
