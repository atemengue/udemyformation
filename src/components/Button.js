import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    const text = this.context === 'english' ? 'submit' : 'Voorelggen';
    return (
      <button className="ui primary">{text}</button>
    );
  }
}

export default Button;