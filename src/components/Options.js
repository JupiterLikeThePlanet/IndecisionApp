import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option'

//we implicitly return stateless components. So using return is not necessary
// remove return and replace opening => { with => (

const Options = (props) => (

    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>

);

export default Options
