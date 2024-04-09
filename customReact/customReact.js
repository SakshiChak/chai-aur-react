// Define a function called customRender that takes a React element and a container as arguments
function customRender(reactElement, container) {
    
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
    

    // Create a new DOM element using the React element's type
    const domElement = document.createElement(reactElement.type);
    
    // Set the inner HTML of the new DOM element to be the children of the React element
    domElement.innerHTML = reactElement.children;
    
    // Loop through the props of the React element and set them as attributes of the DOM element
    for (const prop in reactElement.props) {
        // Skip setting the 'children' prop as it's already handled above
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    
    // Append the new DOM element to the specified container
    container.appendChild(domElement);
}

// Define a React element
const reactElement = {
    type: 'a', // Element type
    props: {
        href: 'https://google.com', // href attribute value
        target : '_blank' // target attribute value
    },
    children:'click me to visit google' // Child text node
};

// Find the main container in the HTML
const mainContainer = document.querySelector('#root');

// Call the customRender function with the React element and the main container
customRender(reactElement, mainContainer);
