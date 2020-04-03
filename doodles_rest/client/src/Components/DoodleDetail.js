import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  getOneUserDoodle,
  verifyUser,
  deleteDoodleCall
} from "../Services/Api-helper";


class DoodleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doodle: []
    };
  }
  componentDidMount() {
    verifyUser();
    this.getSingleDoodle(
      this.props.match.params.category,
      this.props.match.params.id
    );
  }
  getSingleDoodle = async (categoryId, doodleId) => {
    const doodle = await getOneUserDoodle(categoryId, doodleId);
    this.setState({ doodle });
  };

  deleteDoodle = async (e, categoryId, doodleId) => {
    e.preventDefault();
    await deleteDoodleCall(categoryId, doodleId);
    this.props.history.push("/user");
  };

  render() {

    return (
      <div className="details-container">
        <h3>{this.state.doodle.title}</h3>

        <div >

          <div className="drawArea-collection">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450"
              width="100%" overflow="hidden">
              <path
                className="path"
                d={this.state.doodle.path}
              />
            </svg>
          </div>

          <Link
            to={`/doodles/update/${this.state.doodle.category_id}/${this.state.doodle.id}`}
          >
            <button className="update">Update</button>
          </Link>
          <button className="delete"
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

        </div>

      </div>
    );
  }
}
export default withRouter(DoodleDetail);