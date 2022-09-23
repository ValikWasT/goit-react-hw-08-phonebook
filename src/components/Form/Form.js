import React from 'react';
import { Form, FormBookLabel, FormBookInput, SubmitBtn } from './FormStyled';
export class FormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, number, handleSubmit, handleNameChange, handleNumberChange } =
      this.props;
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
  }
}
