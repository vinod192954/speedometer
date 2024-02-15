import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-custom"
        />
        <div>
          <h1 className="main-heading">Speed is {count}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <button
            className="Increase-button"
            onClick={this.onIncrement}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="decrease-button"
            onClick={this.onDecrement}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
