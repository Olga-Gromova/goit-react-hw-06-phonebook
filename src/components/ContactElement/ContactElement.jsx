import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';
import { RiDeleteBin2Line } from 'react-icons/ri';
import css from './ContactElement.module.css';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.contactListItem}>
      {name}: {number}
      <button
        className={css.contactListItemBtn}
        type="button"
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        <RiDeleteBin2Line className={css.contactItemSvg} />
        Delete
      </button>
    </li>
  );
};
