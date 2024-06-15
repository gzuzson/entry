# React Fundamentals

## Core concepts behind React

1. Components
2. JSX
3. props
4. state

## Your first component

```
import React from 'react'; 
import {Text} from 'react-native'; 

const Cat = () => {
    return <Text>Hello, I am your cat!</Text>; 
}; 

export default Cat; 
```

Whatever a function component returns is rendered as a React element. 
React elements let you describe what you want to see on the screen. 

## JSX

React and React Native use JSX, a syntax that lets you write elements inside
JavaScript like so:  '<Text> n </Text>'

The React docs have a comprehensive guide to JSX you can refer to learn even
more.  Because JSX is JavaScript, you can use variables inside it.  

Any JavaScript expression will work between curly braces, including function
calls like {getFullName("Rum, "Tum", "Tugger")}

## Custom components

You've already met React Native's core components.  React lets you nest these
components inside each other to create new components.  These nestable, reusable
components are at the heart of the React paradigm. 

Any component that renders other components is a **parent component**.  

## Props

Props is short for 'properties'.  Props lets you customise React components.
For example, you can pass each <Cat> a different name for Cat to render. 

```
import React from 'react';
import {Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const Cat = (props: CatProps) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export default Cafe;
```

## State

While you can think of props as arguments you use to configure how components
render, **state** is like a component's personal data storage.  State is useful
for handling data that changes over time or that comes from use interaction.
State gives your components memory. 


