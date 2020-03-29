import React from 'react';
import './TitleComp.css';

const TitleComp = ( data ) =>
<div className="title_comp_container">
<h1 className="title_comp_title">{data.title}</h1>
<div className="title_comp_line"></div>
<p className="title_comp_text">{data.text}</p>
</div>
export default TitleComp;
