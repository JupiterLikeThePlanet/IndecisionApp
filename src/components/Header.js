import React from 'react';
import ReactDOM from 'react-dom';

//we implicitly return stateless components. So using return is not necessary
// remove return and replace opening => { with => (

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
)





Header.defaultProps = {
  title: 'Indecision'
};

export default Header
