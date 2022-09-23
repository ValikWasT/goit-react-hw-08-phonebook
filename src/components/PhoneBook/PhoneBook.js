import React from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import {
  FormTitle,
  ContactTitle,
  ContactItem,
  ContactText,
  SearchTitle,
  RemoveBtn,
} from './PhoneBooksStyled';
export class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.checkNameInList(this.state.contacts);
  };

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
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

  renderOneItem = contact => {
    return (
      <ContactItem key={contact.id}>
        <ContactText>
          {contact.name}: {contact.number}
        </ContactText>
        <RemoveBtn
          id={contact.id}
          type="button"
          onClick={this.handleClickDeleteBtn}
        >
          Delete
        </RemoveBtn>
      </ContactItem>
    );
  };

  handleClickDeleteBtn = e => {
    const { contacts } = this.state;
    const contactToDelete = contacts.find(
      contact => contact.id === e.target.id
    );
    contacts.splice(contacts.indexOf(contactToDelete), 1);
    this.setState({
      contacts: contacts,
    });
  };

  checkNameInList = contacts => {
    if (contacts.find(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        ...[
          {
            name: this.state.name,
            id: nanoid(),
            number: this.state.number,
          },
        ],
      ],
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Box>
        <FormTitle>Phonebook</FormTitle>
        <FormContainer
          name={this.state.name}
          number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleNameChange={this.handleNameChange}
          handleNumberChange={this.handleNumberChange}
        />
        <Box>
          <ContactTitle>Contacts</ContactTitle>
          <SearchTitle>Find contacts by name</SearchTitle>
          <SearchContainer
            filter={this.state.filter}
            handleSearch={this.handleSearch}
          />
          <ContactListContainer
            filter={this.state.filter}
            onFilterArray={this.onFilterArray}
            contacts={this.state.contacts}
            renderOneItem={this.renderOneItem}
          />
        </Box>
      </Box>
    );
  }
}
