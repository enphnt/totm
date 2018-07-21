import React, { Component } from 'react';

class Header extends Component {

  render() {
    var currentYear = (new Date()).getFullYear();

    return (
      <footer id="footer" className="App-footer">
        <p>&copy; Copyright {currentYear} Nathan Phennel.</p>
      </footer>
    );
  }
}
export default Header;
