import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';
// import { Spinner } from 'components/Spinner/Spinner';

export const ContactListItem = ({ id, name, phone }) => {
  //   console.log('name', name);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li>
      {name}: {phone}{' '}
      <button onClick={() => deleteContact(id)} disabled={isDeleting}>
        {/* {isDeleting && <Spinner size={12} />} */}
        Delete
      </button>
    </li>
  );
};
