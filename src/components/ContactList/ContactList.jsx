import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contactsOps";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.list}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => dispatch(deleteContact(id))}
        />
      ))}
    </div>
  );
};

export default ContactList;
