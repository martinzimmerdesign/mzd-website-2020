import React from 'react';
import { Link } from "react-router-dom";
import Button from 'Components/Buttons/Button.js';
import Footer from 'Components/Footer/Footer.js';


export default class Impressum extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
        <Button name="Zur Startseite" />
        </Link>
        <h1>Impressum</h1>
        <Footer />
      </div>
    );
  }
}
