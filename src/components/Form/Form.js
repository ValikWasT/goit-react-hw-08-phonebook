import React, { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { Form, FormBookLabel, FormBookInput, SubmitBtn } from './FormStyled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import Notiflix from 'notiflix';
import { RotatingLines } from 'react-loader-spinner';
import { getIsLoading } from 'redux/selectors';

export const FormContainer = () => {
  const isLoading = useSelector(getIsLoading);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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
    Notiflix.Notify.info('Contact adding...');
    createNewContact(name, number);
    setName('');
    setNumber('');
  };

  const createNewContact = (contactName, contactNumber) => {
    dispatch(
      addContact({
        name: contactName,
        phone: contactNumber,
      })
    );
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
      <SubmitBtn type="submit" disabled={isLoading}>
        {isLoading ? (
          <RotatingLines strokeColor="yellow" width="25" height="25" />
        ) : (
          'Add contact'
        )}
      </SubmitBtn>
    </Form>
  );
};
