import React from 'react';

const FormElement = ({tag, id, placeholder, addClass}) =>
<div class="input_wrapper">
  <input type={id} id={id} name={id} placeholder={placeholder} className={tag}/>
</div>
export default FormElement;
