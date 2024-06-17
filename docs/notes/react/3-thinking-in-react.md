# Thinking in React

React can change how you think about the designs you look at and the apps you
build. 

When you build a user interface with React, you will first break it apart into
pieces called components. Then you will describe the visual states for each of
your components. Finally, you will connect your components together so that the
data flows through them. 

## Step 1:  Break the UI into a component hierarchy

Start by drawing boxes around every component and subcomponent in the mockup and
naming them. If you work with a designer, they may have already named these
components in their design tool. 

After identifying components in the mockup, arrange them into a hierarchy.
Components that appear within another component in the mockup should appear as a
child in the hierarchy

## Step 2:  Build a static version in React

Now that you have your componet hierarchy, it's time to implement your app.
The most straightforward approach is to biuld a version that renders the UI from
your data model without adding any interactivity... yet! 

It's often easier to build the static version first and add interactivty later.
Building a static version requires a lot of typing and no thinking, but adding
interactivity requires a lot of thinking and not a lot of typing. 

To build a static version of your app that renders your data model, you'll want
to build components that reuse other components and pass data using **props**.
Props are a way of passing data from parent to child.  (If you're familiar with
the concpet of state, don't use state at all to build this static version.
State is reserved only for interactivity; that is, data that chanegs over time.
Since this is a static version of the app, you don't need it). 

## Step 3:  Find the minimal but complete representation of UI state
To make the UI interactive, you need to let users change your underlying data
model.  You will use **state** for this.  

Think of state as the minimal set of changing data that your app needs to
remember. The most important principle for structuring state is to keep it DRY.
Figure out the absolute minimal representation of the state your application
needs and compute everything else on demand.  For example, if you're biulding a
shopping list, you can store the items as an array in state.  If you want to
also display the number of items in the lsit, don't store the number of items as
another state value; instead, read the length of the array. 

Identify state by:  
- does it remain unchanged over time?  If so, it isn't state. 
- is it passed in from a parent via props?  If so, it isn't state. 
- can you compute it based on existing state or props in your component?  If so,
  it isn't state. 

## Step 4:  Identify where your state should live

After identifying your app's minimal state data, you need to identify which
component is responsible for changing this state, or owns the state. Remember:
React uses one-way data flow, passing data down the component hierarchy from
parent to child component.  It may not be immediately clear which component
should own what state.  This can be challenging if you're new to this concept,
but you can figure it out by following these steps:  

For each piece of state in your application: 
1. Identify every component that renders something based on that state
2. Find their closest common parent component; a component above them all in the
   hierarchy
3. Decide where the state should live: 

- often, you can put the state directly into their common parent. 
- you can also put the state into some component aboe their common parent. 
- if you can't find a component where it makes sense to own the state, create a
  new component solely for holding the state and add it somewhere in the
  hierarchy above the common parent component. 

## Step 5:  Add inverse data flow


