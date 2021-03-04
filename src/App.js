import React from 'react'
import './App.css'

class Counter extends React.Component {
  // Step 1: Constructor
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  // Step 3: implement incrememt function
  increment () {
    this.setState({ count: this.state.count + 1 })
  }

  // Step 4: implement decrement function
  decrement () {
    this.setState({ count: this.state.count - 1 })
  }

  render () {
    return (
      <React.Fragment>
        {/* Step 6: call increment function */}
        <button onClick={this.decrement}>-</button>
        <h1>{/* Step 2: Display Count */ this.state.count}</h1>
        {/* Step 5: call decrement function */}
        <button onClick={this.increment}>+</button>
      </React.Fragment>
    )
  }
}

export default FCounter

//Now let's make it functional!!!

function FCounter () {
  // Step 1: Add state for count
  const [count, setCount] = React.useState(0)
  return (
    <>
      {/* Step 4: decrement count */}
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* Step 2: display count */}
      <h1>{count}</h1>
      {/* Step 5increment count */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}
