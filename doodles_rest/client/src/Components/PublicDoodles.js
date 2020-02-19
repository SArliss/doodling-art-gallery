import React from 'react';
import { getPublicDoodles } from '../Services/Api-helper.js'

export default class PublicDoodles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      doodles: []
    }
  }

  componentDidMount = async () => {
    const doodles = await getPublicDoodles()
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