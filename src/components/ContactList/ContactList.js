import { getFilter } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useFetchContactsQuery } from '../../redux/contacts/contactSlice';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const {
    data: contacts,
    error,
    isFetching,
    isError,
  } = useFetchContactsQuery();
  const getfilteredContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const contact = contacts ? getfilteredContacts(contacts) : null;

  const showNotFoundError = isError && error.originalStatus === 404;
  console.log('isError', error);
  const showContact = contacts && !isFetching && !isError;

  return (
    <>
      {showNotFoundError && <p>Упс, такого контакта нет в вашем телефоне!</p>}
      {showContact && (
        <ul>
          {contact.map(item => (
            <ContactListItem key={item.id} {...item} />
          ))}
        </ul>
      )}
      {/* <ul>
        {contact.map(item => (
          <ContactListItem key={item.id} {...item} />
        ))}
        {showNotFoundError && (
          <p>
            Упс, покемона с имененем <b>{contact.name}</b> нет
          </p>
        )}
      </ul> */}
    </>
  );
};
export default ContactList;

// import React from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { getVisibleContact } from '../../redux/contacts/contacts-selectors';
// // import contactsActions from '../../redux/contacts/contacts-actions';
// import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
// import { ImBin } from 'react-icons/im';
// import s from './ContactList.module.css';

// const ContactList = ({ contacts, id, content }) => {
//   const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
//   // const contacts = useSelector(getVisibleContact);
//   // const dispatch = useDispatch();
//   // const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

//   return (
//     <ul>
//       {contacts.map(contact => (
//         <li key={contact.id}>
//           {content}{' '}
//           <button onClick={() => deleteContact(id)} disabled={isDeleting}>
//             {/* {isDeleting && <Spinner size={12} />} */}
//             <ImBin className={s.ContactListButtonIcon} />
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>

//     // <ul>

//     /* {contacts.map(({ id, name, number }) => (
//         <li className={s.ContactListItem} key={id}>
//           <p className={s.ContactList}>
//             {name}: {number}
//           </p>
//           <button
//             className={s.ContactListButton}
//             type="button"
//             onClick={() => onDeleteContact(id)}
//           >
//             <ImBin className={s.ContactListButtonIcon} />
//             Delete
//           </button>
//         </li>
//       ))} */
//     // </ul>
//   );
// };

// export default ContactList;
