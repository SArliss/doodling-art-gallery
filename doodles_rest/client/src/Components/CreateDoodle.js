import React from 'react';
import { createDoodleCall } from '../Services/Api-helper.js';
import { withRouter } from 'react-router-dom';

class CreateDoodle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linesLog: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  createDoodle = async (category, doodleData) => {
    await createDoodleCall(category, doodleData);
    this.props.history.push("/user");
  }

  handleDropdown = (e) => {
    this.setState({
      category: e.target.value
    })
  }

  componentWillReceiveProps() {
    this.setState({
      linesLog: this.state.linesLog.concat(this.props.lines)
  }, () => console.log(this.state.linesLog));
}

  render() {    
    return (
      <div>
 
      <div className="eraser-wrapper">
        <button className="eraser" onClick={() => window.location.reload(false)}>Erase</button>
      </div> 

      <form className="submit-doodle-form"
        onSubmit={e => {
          e.preventDefault();
          this.createDoodle(this.state.category, {
            "title": this.state.title,
            "path": this.state.linesLog
          });
        }}
        >
        <div className="submit-title-category-fields">
        <label htmlFor="title"> Title: </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
            />
        </div>
       
        <div className="submit-title-category-fields">
        <label htmlFor="category"> Category: </label>
        <select onChange={this.handleDropdown}>
          <option> Please select one</option>
          <option name="Objects" value={1}> Objects</option>
          <option name="Animals" value={2}> Animals</option>
          <option name="Geometric Shapes" value={3}>Geometric Shapes</option>
          <option name="Nature" value={4}> Nature</option>
          <option name="Human Body" value={5}> Human Body</option>
          <option name="Food" value={6}> Food</option>
          <option name="Others" value={7}> Others</option>
            </select>
        </div>
        <button>Submit</button>
        </form>
        
      </div>
    )
  }
}

export default withRouter(CreateDoodle);