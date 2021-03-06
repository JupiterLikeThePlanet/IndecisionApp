import React from 'react';
import ReactDOM from 'react-dom';

class AddOption extends React.Component {
  // new syntax using babel plugin transform-class-properties
  state = {
    error: undefined
  }

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }


  // old syntax w/o plugin transform-class-properties

  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
    // this.state = {
    //   error: undefined
    // };
  // }
  // handleAddOption(e) {
  //   e.preventDefault();
  //
  //   const option = e.target.elements.option.value.trim();
  //   const error = this.props.handleAddOption(option);
  //
  //   this.setState(() => ({ error }));
  //
  //   if (!error) {
  //     e.target.elements.option.value = '';
  //   }
  // }


  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option--input" type="text" name="option" />
          <button className="button" >Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption
