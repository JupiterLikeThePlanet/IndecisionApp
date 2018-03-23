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
    closeTimeoutMS={200}
    className="modal"
  >
    <div>
      <h3 className="modal--title">You should do this</h3>
      {props.selectedOption && <p className="modal--body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearSelectedOption}>OKAY</button>
    </div>

  </Modal>

)

export default OptionModal;
