import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends Component {
  static contextType = LanguageContext;

  renderSubmit(value) {
    return value === 'english' ? 'Submit': 'Voorelggen';
  }

  render() {
    console.log(this.context);
    const text = this.context === 'english' ? 'submit' : 'Voorelggen';
    return (
      <ColorContext.Consumer>
      {(color) => 
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {(value) => this.renderSubmit(value)}
          </LanguageContext.Consumer>
        </button>
      }
      </ColorContext.Consumer>
    );
  }
}

export default Button;