import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';
import { getFilterValue, getContacts } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import { FormTitle, ContactTitle, SearchTitle } from './PhoneBooksStyled';
import { addNewContact, removeContact } from 'redux/contactsSlice';
export const PhoneBook = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  // const disabledFirstRender = useRef(false);

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!disabledFirstRender.current) {
  //     disabledFirstRender.current = true;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleSearch = e => {
    // setFilter(e.currentTarget.value);
    dispatch(setFilterValue(e.currentTarget.value));
  };

  const onFilterArray = array => {
    return array.filter(contact => {
      const lowerCaseName = contact.name.toLowerCase();
      const lowerCaseFilter = filter.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });
  };

  const handleClickDeleteBtn = e => {
    // setContacts(contacts.filter(contact => contact.id !== e.target.id));
    dispatch(removeContact(e.target.id));
  };

  const addNewContacts = (contactName, contactNumber) => {
    // console.log(contacts);
    // setContacts([
    //   ...contacts,
    //   ...[
    //     {
    //       name: contactName,
    //       id: nanoid(),
    //       number: contactNumber,
    //     },
    //   ],
    // ]);
    dispatch(
      addNewContact({
        name: contactName,
        id: nanoid(),
        number: contactNumber,
      })
    );
  };

  const createArrayOfContacts = () => {
    if (filter !== '') {
      return onFilterArray(contacts).map(contact => contact);
    }
    return contacts;
  };

  return (
    <Box>
      <FormTitle>Phonebook</FormTitle>
      <FormContainer addNewContact={addNewContacts} />
      <Box>
        <ContactTitle>Contacts</ContactTitle>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchContainer handleSearch={handleSearch} />
        <ContactListContainer
          arrayOfContacts={createArrayOfContacts()}
          handleClickDeleteBtn={handleClickDeleteBtn}
        />
      </Box>
    </Box>
  );
};
