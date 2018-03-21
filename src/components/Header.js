import React from 'react';
import ReactDOM from 'react-dom';

//we implicitly return stateless components. So using return is not necessary
// remove return and replace opening => { with => (

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
)





Header.defaultProps = {
  title: 'Indecision'
};

export default Header
