import type { Contact as ContactType } from "../../App";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

type Props = {
  contacts: ContactType[];
  deleteContact: (id: string) => void;
};

export default function ContactList({ contacts, deleteContact }: Props) {
  return (
    <div className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}
