import React from 'react';
import { createDoodleCall } from '../Services/Api-helper.js';
import { withRouter } from 'react-router-dom';



class CreateDoodle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  createDoodle = async (category, doodleData) => {
    const newDoodle = await createDoodleCall(category, doodleData)
    this.props.history.push("/user");
  }

  handleDropdown = (e) => {
    this.setState({
      category: e.target.value
    })
  }


  render() {

    let pathData = "";
    this.props.lines.map(line => (
      pathData = "M " + line.map(p => (
        `${p.get('x')} ${p.get('y')}`)).join(" L ")))

    console.log(pathData)
    
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.createDoodle(this.state.category, {
            "title": this.state.title,
            "path": pathData
          });
        }}
      >
        <label htmlFor="title"> Title: </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
       
        <br></br>
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
        <br></br>
        <button>Submit</button>
      </form>
      
    )
  }
}

export default withRouter(CreateDoodle);