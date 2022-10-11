import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getContacts } from 'redux/selectors';
import { Form, FormBookLabel, FormBookInput, SubmitBtn } from './FormStyled';
import { useSelector } from 'react-redux';
export const FormContainer = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    checkNameInList(contacts);
  };

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const checkNameInList = contacts => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    addNewContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormBookLabel>
        Name
        <FormBookInput
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormBookLabel>
      <FormBookLabel>
        Number
        <FormBookInput
          type="tel"
          value={number}
          onChange={handleNumberChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormBookLabel>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};

// export class FormContainer extends React.Component {
//   state = { name: '', number: '' };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.checkNameInList(this.props.contacts);
//   };

//   handleNameChange = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleNumberChange = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   checkNameInList = contacts => {
//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
//       )
//     ) {
//       alert(`${this.state.name} is already in contacts.`);
//       return;
//     }
//     this.props.addNewContact(this.state.name, this.state.number);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <FormBookLabel>
//           Name
//           <FormBookInput
//             type="text"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </FormBookLabel>
//         <FormBookLabel>
//           Number
//           <FormBookInput
//             type="tel"
//             value={this.state.number}
//             onChange={this.handleNumberChange}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </FormBookLabel>
//         <SubmitBtn type="submit">Add contact</SubmitBtn>
//       </Form>
//     );
//   }
// }

FormContainer.propTypes = {
  // contacts: PropTypes.arrayOf(
  //   PropTypes.exact({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   }).isRequired
  // ).isRequired,
  addNewContact: PropTypes.func.isRequired,
};
