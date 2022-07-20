import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import { fetchContacts, addContact, removeContact } from "./redux/contacts/contacts-operations";
import { getAllContacts } from "./redux/contacts/contacts-selectors";

function App() {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  const [ filter, setFilter ] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = ( data ) => { 
    dispatch(addContact(data))
  };

  const onDeleteContact = (contactId) => {
    dispatch(removeContact(contactId))
  };

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };
    
  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filteredContacts = getVisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}/>
      <h2>Contacts</h2>
      <Filter onChange={changeFilter}/>
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </div>
  );
};

export default App;