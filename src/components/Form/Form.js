import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City ..." required/>
          <input type="text" name="country" placeholder="Country ..." required/>
          <button>Get weather</button>
        </form>
      </div>
    )
  }
}

export default Form;