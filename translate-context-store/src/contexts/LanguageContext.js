import React, { Component, createContext } from 'react';

const Context = createContext('english');

export class LanguageStore extends Component {
  state = { language: 'english' };

  onLanguageChange = language => this.setState({ language });

  render() {
    const providerValue = {
      ...this.state,
      onLanguageChange: this.onLanguageChange
    };

    return (
      <Context.Provider value={providerValue}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
