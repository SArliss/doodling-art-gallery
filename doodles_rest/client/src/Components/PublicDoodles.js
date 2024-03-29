import React from 'react';
import { getPublicDoodles } from '../Services/Api-helper.js';

export default class PublicDoodles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      doodles: [],
      isLoading: false,
      error: ""
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })
    try {
      const doodles = await getPublicDoodles()
      this.setState({
        doodles,
        isLoading: false
      })
    } catch (e) {
      this.setState({
        isLoading: false,
        error: e.message
      })
    }
  }

  render() {
    return (
      <div>

        <div className="loading-message">
          {this.state.isLoading &&
            <div>
              <div className="loader"></div>
              <p>Loading doodles...</p>
            </div>}
          {this.state.error && <p className="error">{this.state.error}</p>}
        </div>

        <div className="doodles-wrapper">
          {this.state.doodles.map(doodle =>
            <div key={doodle.id} className="individual-doodle">

              <div className="doodle-info">
                <p>{doodle.title}</p>
              </div>

              <div className="drawArea-collection">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" 
                  width="100%" overflow="hidden">
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