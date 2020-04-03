import React from 'react';
import { getAllUserDoodles } from '../Services/Api-helper.js'
import { Link } from 'react-router-dom';

export default class PersonalDoodles extends React.Component {
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
      const doodles = await getAllUserDoodles()
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

              <div className="individual-doodle-title">
                <p>{doodle.title} by {localStorage.getItem('name')}.</p>
              </div>

              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>
                <div className="drawArea-collection">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450" 
                  width="100%" overflow="hidden">
                  <path
                    className="path"
                    d={doodle.path}
                  />
                </svg>
              </div>
              </Link>

              <div className="individual-doodle-update-delete">
              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>Update/Delete</Link>
              </div>
                
            </div>
          )}
        </div>
      </div>
    )
  }
}