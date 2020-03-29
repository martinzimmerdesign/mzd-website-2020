import React from 'react';
import './Button.css';

const Button = ( {name, addClass} ) =>
<div className={"button " + addClass}>
    <h1 className="button-text">{name}</h1>
    <span className="button-panel button-back"></span>
    <span className="button-panel button-front"></span>
</div>
export default Button;
