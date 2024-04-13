import { Phone, UserRound } from "lucide-react";
import css from "./Contact.module.css";
type Props = {
  id: string;
  name: string;
  number: string;
  deleteContact: (id: string) => void;
};

export default function Contact({ id, name, number, deleteContact }: Props) {
  const iconsParams = {
    size: 16,
    strokeWidth: 3,
  };

  return (
    <div className={css.contact}>
      <a href={"tel:" + number}>
        <p>
          <UserRound {...iconsParams} />
          {name}
        </p>
        <p>
          <Phone {...iconsParams} />
          {number}
        </p>
      </a>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
}
