import React from 'react';
import ReactDOM from 'react-dom/client'

/*function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
*/

// Syntax is incorrect
/*const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target : '_blank'
  },
  children:'click me to visit google'
}
*/


// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit google</a>
// )

// Define a string variable
const anotherUser = "chai aur react";

// Create a React element using createElement method
const reactElement = React.createElement(
  'a', // Element type
  { href: 'https://google.com', target: '_blank' }, // Element props
  'click me to visit google ', 
  anotherUser 
);


ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
)
