import PropTypes from "prop-types";

import ContactListItem from "./ContactListItem";
import s from "./contacts-list.module.css";

function ContactsList({ items, onClick }) {
  const elements = items.map((el) => {
    const { number, name, id } = el;
    return (
      <ContactListItem
        key={id}
        id={id}
        onClick={onClick}
        number={number}
        name={name}
      />
    );
  });

  return (
    <table className={s.list}>
      <tbody>{elements}</tbody>
    </table>
  )
};

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;