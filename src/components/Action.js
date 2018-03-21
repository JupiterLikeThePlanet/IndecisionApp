import React from 'react';
import ReactDOM from 'react-dom';


//we implicitly return stateless components. So using return is not necessary
// remove return and replace opening { with (

const Action = (props) => (

    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>

);

export default Action
