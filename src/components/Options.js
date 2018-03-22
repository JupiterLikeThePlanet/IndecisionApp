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
      <div className="">
      {props.options.length === 0 && <p className="widget-message">Please add an option to get started!</p>}
      {
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      </div>


    </div>

);

export default Options
