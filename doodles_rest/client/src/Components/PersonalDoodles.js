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

              <div className="individual-doodle-update-delete">
              <p>{doodle.title} by {localStorage.getItem('name')}.</p>
              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>Update/Delete</Link>
              </div>
                
              <Link to={`/doodles/detail/${doodle.category_id}/${doodle.id}`}>
                <div className="drawArea">
                  <svg className="drawing">
                    <path
                      className="path"
                      d={doodle.path}
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