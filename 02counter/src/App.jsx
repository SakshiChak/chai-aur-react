
import { useState } from 'react';
import './App.css'

function App() {
  // Use useState hook to create a state variable 'counter' with initial value 10
  const [counter, setCounter] = useState(10);  // let counter = 10

  // Function to increment the counter value
  const addValue = () => {
    // Check if the counter value is less than 20 before incrementing
    if (counter < 20) {
      // Update the counter value using setCounter
      setCounter(counter + 1);
    }
  };

  // Function to decrement the counter value
  const removeValue = () => {
    // Check if the counter value is greater than 0 before decrementing
    if (counter > 0) {
      // Update the counter value using setCounter
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      {/* Button to add value, disabled when counter reaches 20 */}
      <button onClick={addValue} disabled={counter === 20}>
        Add value
      </button>
      
      {/* Button to remove value, disabled when counter is 0 */}
      <button onClick={removeValue} disabled={counter === 0}>
        Remove value
      </button>

    </>
  );
}

export default App

