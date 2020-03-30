import React from 'react';
import './Button.css';
import { Link } from "react-router-dom";

const Button = ( {name, addClass, link} ) =>
<Link to={link}>
<div className={"button " + addClass}>
    <h1 className="button-text">{name}</h1>
    <span className="button-panel button-back"></span>
    <span className="button-panel button-front"></span>
</div>
</Link>
export default Button;
