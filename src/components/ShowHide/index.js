import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({
      showFirstName: !prevState.showFirstName,
    }))
  }

  onClickLastName = () => {
    this.setState(prevState => ({
      showLastName: !prevState.showLastName,
    }))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
