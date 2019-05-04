import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store'
import map from 'lodash/map'
import Comp01 from './Comp01'

class Playground extends Component {
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
    console.log('componentDidMount')
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

        <div>test array</div>
        {console.log('this.props.testArray', this.props.testArray)}
        {map(this.props.testArray, (item, id) => {
          return <div key={id}>{item.text}</div>
        })}

        <button
          onClick={() => {
            store.dispatch({
              type: 'UPDATE_ARRAY',
              data: [
                ...this.props.testArray, // for non mutating update to avoid not re-render
                {
                  text: 'c',
                },
              ],
            })
          }}
        >
          UPDATE ARRAY
        </button>

        <Comp01 />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    testArray: state.testArray,
  }
}
export default connect(mapStateToProps)(Playground)
