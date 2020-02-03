import React from 'react';
import { View, Text } from 'react-native';

// State is mutable
// Props are immutable

// the 'onPress' attribute in the react components
// is a listener in case the component is touched

class MyComponent extends React.Component {

  // setting initial state
  // this can be introduced in the cosntructor
  // state = {
  //   year: 2020,
  //   name: 'Gonz Campos',
  //   colors: ['blue']
  // }

  constructor() {
    super()
    this.state = {
      year: 2020,
      leapYear: true,
      topics: ['React', 'React Native', 'Javascript'],
      info: {
        paperback: true,
        length: '355 pages',
        type: 'programming'
      }
    }
  }

  // the method 'setState' will trigger once again the
  // render method. If the state is updated directly,
  // no changes will be visible
  updateYear() {
    const newYear = this.state.year + 1;
    this.setState({
      year: newYear
    })
  }

  // a good practice is to define custom methods
  // before the render method
  render() {
    let leapyear = <Text>This is not a leapyear!</Text>
    if (this.state.leapYear) {
      leapyear = <Text>This is a leapyear!</Text>
    }
    return(
      <View>
        <Text>{ this.state.year }</Text>
        <Text>Length: { this.state.info.length }</Text>
        <Text>Type: { this.state.info.type }</Text>
        { leapyear }
      </View>
    )
  }
}

export default MyComponent;