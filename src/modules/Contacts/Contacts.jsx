import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import { fetchContacts, removeContact, addContact } from "../../redux/contacts/contacts-operation";
import { getContacts } from "../../redux/contacts/contacts-selector";
import { useDispatch } from "react-redux";

import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

import s from "./contacts.module.css";

const Contacts = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  const contactsStore = useSelector(getContacts);
  const { items, error, loading } = contactsStore;
  const filteredItems = () => {
    if (!filter) {
      return items;
    }
    const newItems = items.filter((e) => {
      const { name } = e;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return newItems;
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = useCallback(
    (data) => dispatch(addContact(data)),
    [dispatch]
  );
  const onRemoveContact = useCallback(
    (id) => {
      dispatch(removeContact(id));
    },
    [dispatch]
  );

  const changeFilter = useCallback(
    ({ target: { value } }) => setFilter(value.trim()),
    [setFilter]
  );

  return (
    <div className="container">
      <div className={s.content}>
        <div className={s.form}>
          <h1 className="title">Add contact here:</h1>
          <ContactForm onSubmit={onAddContact} />
        </div>

        <div className={s.list}>
          <h2 className="title">Contacts List:</h2>
          <Filter onChange={changeFilter} />
          {loading && <p>Loading...</p>}
          {error && <p>{`Error: ${error}`}</p>}
          {items.length > 0 && !error && !loading && (
            <ContactsList items={filteredItems()} onClick={onRemoveContact} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
