import { memo } from "react";
import PropTypes from "prop-types";
import s from "./filter.module.css";
const Filter = ({ onChange }) => {
  return (
    <label className={s.label}>
      <input
        onChange={onChange}
        className={s.input}
        placeholder="find contact"
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(Filter);
