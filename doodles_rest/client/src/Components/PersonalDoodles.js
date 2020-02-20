import React from 'react';
import { getAllUserDoodles } from '../Services/Api-helper.js'
import { Link } from 'react-router-dom';

export default class PersonalDoodles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      doodles: []
    }
  }

  componentDidMount = async () => {
    const doodles = await getAllUserDoodles()
    this.setState({
      doodles
    })
  }

  render() {
    return (
      <div>
        <div className="doodles-wrapper">
          {this.state.doodles.map(doodle =>
            <div key={doodle.id} className="individual-doodle">
              
              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>Update/Delete</Link>

              
                <p>Title: {doodle.title}. Artist: {localStorage.getItem('name')}.</p>
              
              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>
              <div className="drawArea">
              <svg width="450px" height="450px">
                <path d={doodle.path}
                  stroke="black"
                  strokeWidth="4"
                  fill="none"
                  strokeLinejoin= "round"
                  strokeLinecap= "round"
                />
              </svg>
                </div>
                </Link>

            </div>
          )}
        </div>
      </div>
    )
  }
}