import React, { Component } from 'react'
import './app.scss'
import { connect } from 'react-redux'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
  }
  handleChange(event) {
    this.setState({ name: event.target.value })
  }

  componentDidMount() {
    alert('componentDidMount')
  }
  render() {
    return (
      <div>
        <h1>react state</h1>

        <p>{this.state.name}</p>
        <span>Say Hello to World : </span>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleChange(e)}
        />

        <h1>react-reducer counter</h1>

        <div>count : {this.props.count}</div>
        <button
          onClick={() => {
            store.dispatch({ type: 'INCREMENT' })
          }}
        >
          INCREMENT
        </button>

        <button
          onClick={() => {
            store.dispatch({ type: 'DECREMENT' })
          }}
        >
          DECREMENT
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(App)
