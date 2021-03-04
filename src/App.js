import React from 'react'
import './App.css'

class Counter extends React.Component {
  // Step 1: Constructor

  // Step 3: implement incrememt function

  // Step 4: implement decrement function

  render () {
    return (
      <React.Fragment>
        {/* Step 6: call increment function */}
        <button>-</button>
        <h1>{/* Step 2: Display Count */}</h1>
        {/* Step 5: call decrement function */}
        <button>+</button>
      </React.Fragment>
    )
  }
}

export default Counter

//Now let's make it functional!!!

function FunctionalCounter () {
  // Step 1: Add state for count
  return (
    <>
      {/* Step 4: decrement count */}
      <button>-</button>
      {/* Step 2: display count */}
      <h1></h1>
      {/* Step 5increment count */}
      <button>+</button>
    </>
  )
}