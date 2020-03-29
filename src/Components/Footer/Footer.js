import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';


const Footer = () =>
<div className="section_container footer">
  <div className="section_content">
    <Link to="/impressum"><li><a>Impressum</a></li></Link>
    <Link to="/datenschutzerklaerung"><li><a>Datenschutzerklärung</a></li></Link>
    <li className="footer_text">Copyright © 2020 Martin Zimmer Design</li>
  </div>
</div>

export default Footer;
