import React from 'react';
import { getPublicDoodles } from '../Services/Api-helper.js';
import swal from 'sweetalert';

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
    swal("Loading public gallery in 3, 2, 1...");
    return (
      <div>
        <div className="doodles-wrapper">
          {this.state.doodles.map(doodle =>
            <div key={doodle.id} className="individual-doodle">

              <div className="doodle-info">
                <p>Title: {doodle.title}</p>
              </div>

              <div className="drawArea">
                <svg className="drawing">
                  <path
                    className="path"
                    d={doodle.path}
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