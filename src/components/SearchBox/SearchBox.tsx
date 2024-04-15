import css from "./SearchBox.module.css";
type Props = {
  filter: string;
  setFilter: (value: string) => void;
};

export default function SearchBox({ filter, setFilter }: Props) {
  return (
    <div className={css.box}>
      <h2>Find contacts by name</h2>
      <input
        onChange={(ev) => setFilter(ev.currentTarget.value)}
        type="text"
        placeholder="Find a contact"
        value={filter}
      />
    </div>
  );
}
