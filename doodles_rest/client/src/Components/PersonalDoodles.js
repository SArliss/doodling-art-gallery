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
    console.log(doodles)
    this.setState({
      doodles
    })
  }

  render() {
    return (
      <div>
        <div className="doodles-wrapper">
          {this.state.doodles.map(doodle =>
            <div key={doodle.id} >
              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>Details</Link>

              <div className="doodle-info">
                <p>Title: {doodle.title}</p>
                <p>User ID: {doodle.created_by}</p>
              </div>
              
              <div className="drawArea">
                <svg width="450px" height="450px">
                  <path d={doodle.path} stroke="black" stroke-width="4" fill="none"/>
                </svg>
              </div>

            </div>
          )}
        </div>
      </div>
    )
  }
}