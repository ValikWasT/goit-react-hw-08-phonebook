import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormBookLabel, FormBookInput, SubmitBtn } from './FormStyled';
export class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = { name: '', number: '' };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  addValuesToMainState = () => {
    this.props.handleClickOnForm(this.state.name, this.state.number);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <FormBookLabel>
          Name
          <FormBookInput
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
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
            value={this.state.number}
            onChange={this.handleNumberChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormBookLabel>
        <SubmitBtn type="submit" onClick={this.addValuesToMainState}>
          Add contact
        </SubmitBtn>
      </Form>
    );
  }
}

FormContainer.propTypes = {
  handleClickOnForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
