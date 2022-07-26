import { useState } from 'react';
import PropTypes from "prop-types";

function ContactForm({onSubmit}) {
  const [form, setForm] = useState({
    name: '',
    phone: ''
  });

  const  handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form });
    setForm({ 
        name: '',
        phone: ''
    });
  };

  const handleChange = ({target}) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
  }))
  };

  const { name, phone } = form;

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="phone"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button type="submit" className='addBtn'>add contact</button>
    </form>
  );
}

ContactForm.defaultProps = {
  onSubmit: () => {}
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ContactForm;