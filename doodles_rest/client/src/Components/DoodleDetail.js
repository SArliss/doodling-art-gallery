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
        <h1>{this.state.doodle.title}</h1>

        <div >
          <Link
            to={`/doodles/update/${this.state.doodle.category_id}/${this.state.doodle.id}`}
          >
            <button>Update</button>
          </Link>
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

      </div>
    );
  }
}
export default withRouter(DoodleDetail);