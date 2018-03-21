import React from 'react';
import ReactDOM from 'react-dom';

//we implicitly return stateless components. So using return is not necessary
// remove return and replace opening => { with => (

const Option = (props) => (

    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>

);



export default Option
