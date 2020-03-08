import React, { Component } from "react";
import { updateDoodle, deleteDoodleCall } from "../Services/Api-helper";
import { getOneUserDoodle } from "../Services/Api-helper";
import { withRouter } from "react-router-dom";
import swal from 'sweetalert';

class UpdateDoodle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      path: "",
      doodle: []
    };
  }
  componentDidMount = () => {
    this.getSingleDoodle(
      this.props.match.params.category,
      this.props.match.params.id
    );
  };

  getSingleDoodle = async (categoryId, doodleId) => {
    const doodle = await getOneUserDoodle(categoryId, doodleId);
    this.setState({ doodle });
    this.setState({
      title: this.state.doodle.title,
      path: this.state.doodle.path
    });
  };

  handleDropdown = e => {
    this.setState({
      category: e.target.value
    });
  };

  updateDoodle = async (e, category_id, id, postData) => {
    e.preventDefault();
    swal("Updating your art might take a few seconds. Thanks!");
    const res = await updateDoodle(category_id, id, postData);
    this.props.history.push(`/user`);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteDoodle = async (e, categoryId, doodleId) => {
    e.preventDefault();
    await deleteDoodleCall(categoryId, doodleId);
    this.props.history.push("/user");
  };

  render() {
    return (
      <div className="update-form">

        <form 
          onSubmit={e =>
            this.updateDoodle(
              e,
              this.props.match.params.category,
              this.props.match.params.id,
              this.state
            )
          }
        >
          <p>At this moment, only title and category fields can be updated, thank you.</p>
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
          <button>Update</button>
        </form>

        <button
            onClick={e =>
              this.deleteDoodle(
                e,
                this.state.doodle.category_id,
                this.state.doodle.id
              )
            }
          >
            Delete
        </button>

        <div className="drawArea">
                  <svg className="drawing">
                    <path
                      className="path"
                      d={this.state.doodle.path}
                    />
                  </svg>
                </div>

      </div>
    );
  }
}
export default withRouter(UpdateDoodle);