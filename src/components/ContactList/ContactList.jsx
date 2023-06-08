import css from './contact-list.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/slice';

const ContactsList = () => {
  const selectContacts = useSelector(state => state.contacts);
  const selectFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const result = selectContacts.filter(item => {
    return item.name.toLowerCase().includes(selectFilter.toLowerCase());
  });

  const contact = result.map(item => (
    <li key={item.id} className={css.item}>
      <p>
        {item.name}: {item.number}
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          dispatch(deleteContacts(item.id));
        }}
      >
        Delete
      </button>
    </li>
  ));

  return <ul className={css.list}>{contact}</ul>;
};

export default ContactsList;
