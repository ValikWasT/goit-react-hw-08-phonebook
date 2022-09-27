import React from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import { FormTitle, ContactTitle, SearchTitle } from './PhoneBooksStyled';
export class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilterArray = array => {
    return array.filter(contact => {
      const lowerCaseName = contact.name.toLowerCase();
      const lowerCaseFilter = this.state.filter.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });
  };

  handleClickDeleteBtn = e => {
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    });
  };

  addNewContact = (contactName, contactNumber) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        ...[
          {
            name: contactName,
            id: nanoid(),
            number: contactNumber,
          },
        ],
      ],
    });
  };

  createArrayOfContacts = () => {
    if (this.state.filter !== '') {
      return this.onFilterArray(this.state.contacts).map(contact => contact);
    }
    return this.state.contacts;
  };

  render() {
    return (
      <Box>
        <FormTitle>Phonebook</FormTitle>
        <FormContainer
          contacts={this.state.contacts}
          addNewContact={this.addNewContact}
        />
        <Box>
          <ContactTitle>Contacts</ContactTitle>
          <SearchTitle>Find contacts by name</SearchTitle>
          <SearchContainer
            filter={this.state.filter}
            handleSearch={this.handleSearch}
          />
          <ContactListContainer
            arrayOfContacts={this.createArrayOfContacts()}
            handleClickDeleteBtn={this.handleClickDeleteBtn}
          />
        </Box>
      </Box>
    );
  }
}
