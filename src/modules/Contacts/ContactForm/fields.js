export const fields = {
  name: {
    label: 'Name:',
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
    placeholder: 'enter name',
  },
  number: {
    label: 'Number:',
    type: 'tel',
    name: 'number',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    required: true,
    placeholder: 'enter number',
  },
};
