import React from 'react';
import { getAllUserDoodles } from '../Services/Api-helper.js'
// import { Link } from 'react-router-dom';

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

              <div className="doodle-info">
              <p>Title: {doodle.title}</p>
                <p>User: {doodle.created_by}</p>
              </div>
              
              <div className="drawArea">
                <svg width="450px" height="450px" className="drawing">
                  <path d={doodle.path} />
                </svg>
              </div>

            </div>
          )}
        </div>
      </div>
    )
  }
}