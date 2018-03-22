import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option'

//we implicitly return stateless components. So using return is not necessary
// remove return and replace opening => { with => (

const Options = (props) => (

    <div className="">
      <div className="widget-header ">
      <h3 className="widget-header--title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}>
          Remove All
        </button>
      </div>
      <div className="widget-message">
      {props.options.length === 0 && <p className="">Please add an option to get started!</p>}
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
    </div>

);

export default Options
