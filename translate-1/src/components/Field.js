import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {language => language === 'english' ? 'Name' : 'Naam'}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

export default Field;
