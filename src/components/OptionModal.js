import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

//we implicitly return stateless components. So using return is not necessary

const OptionModal = (props) => (

  // onClick = (e) => {
  //   e.preventDefault()
  //   props.handleSelectedOption()
  //  //onClick={this.onClick()}  //onClick={this.props.handleSelectedOption()
  // };

  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="This is your life"
    onRequestClose={props.handleClearSelectedOption}
  >
    <div>
      <h3>some text</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}  >OK</button>
    </div>

  </Modal>

)

export default OptionModal;
