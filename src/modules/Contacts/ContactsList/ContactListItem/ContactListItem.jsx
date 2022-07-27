import { memo } from "react";
import PropTypes from "prop-types";
import s from "./contact-list-item.module.css";
import Button from "../../../../shared/components/Button";

function ContactListItem(props) {
  const { number, name, onClick, id } = props;

  return (
    <tr>
      <td className={s.text}>{name}</td>
      <td className={s.text}>{number}</td>
      <td>
      <Button
        className={s.text}
        text="Detele"
        type="button"
        onClick={(e) => {
          onClick(id);
        }}
      />
      </td>
    </tr>
  );
}
ContactListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ContactListItem);