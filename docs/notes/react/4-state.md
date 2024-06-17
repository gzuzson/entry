# State:  a component's memory

Components often need to change what's on the screen as a result of an
interaction.  Typing into the form should update the input field, clicking
'next' on an image carousel should change which image is displayed, clicking
'buy' should put a product in the shopping cart.  Components need to 'remember'
things:  the current input value, the current image, the shopping cart.  In
React, this kind of component-specific memory is called **state**. 

## When a regular variable isn't enough
1. local variables don't persist between renders
2. changes to local variables won't trigger renders

To update a component with new data, two things need to happen:  
1. retain the data between renders
2. trigger React to render the component with new data (re-rendering)

The `useState` Hook provides those two things: 
1. a state variable to retain the data between renders
2. a state setter function to update the variable and trigger React to render
   the component again. 

## Adding a state variable
To add a state variable, import `useState` from React at the top of the file


