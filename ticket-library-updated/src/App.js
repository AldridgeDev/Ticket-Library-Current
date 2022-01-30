import React, { Component } from 'react';
import Header from './components/Header';
import FilterKeywords from './components/FilterKeywords';
import TicketResults from './components/TicketResults';
import SearchInput from './components/SearchInput';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredKeywords: FilterKeywords("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredKeywords: FilterKeywords(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <TicketResults ticketData={this.state.filteredKeywords} />
      </div>
    )
  }

}