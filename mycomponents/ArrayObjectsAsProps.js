import React from 'react';
import { Text, View } from 'react-native';

class ArrayPropsComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      leapYear: true,
      info:  {
        type: 'programming'
      }
    }
  }

  render(){
    return(
      <BookDisplay
       leapYear={ this.state.leapYear }
       info={ this.state.info }
       topics={['React', 'React Native', 'JavaScript']} />
    )
  }
}

const BookDisplay = (props) => {
  let leapyear
  let { topics } = props
  const { info } = props

  topics = topics.map((topic, i) => {
    return <Text>{ topic }</Text>
  })
  
  if (props.leapYear) {
    leapYear = <Text>This is a leapyear!</Text>
  }

  return(
    <View>
      { leapyear }
      <Text>Book type: {info.type}</Text>
      { topics }
    </View>
  )
  
}

export default ArrayPropsComponent;