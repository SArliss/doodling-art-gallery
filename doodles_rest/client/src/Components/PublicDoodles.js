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
          <div key={doodle.id} className="individual-doodle">

            <div className="doodle-info">
              <p>Title: {doodle.title}</p>
            </div>
            
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

          </div>
        )}
      </div>
    </div>
    )
  }
}