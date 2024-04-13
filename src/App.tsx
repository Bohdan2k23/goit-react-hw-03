import css from "./App.module.css";
import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
export type Contact = {
  id: string;
  name: string;
  number: string;
};

const localKey = "contacts";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
function App() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const local = localStorage.getItem(localKey);
    if (local) {
      return JSON.parse(local);
    }
    return initialContacts;
  });
  const [filter, setFilter] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  function addContact(contact: Contact) {
    const result = [...contacts, contact];
    setContacts(result);
    localStorage.setItem(localKey, JSON.stringify(result));
  }
  function deleteContact(id: string) {
    const result = contacts.filter((contact) => contact.id !== id);
    setContacts(result);
    localStorage.setItem(localKey, JSON.stringify(result));
  }

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
