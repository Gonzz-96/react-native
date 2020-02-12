import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

// This can also be done
// cons StatelessBookDisplay = ({ updateBook, book })
// const StatelessBookDisplay = (props) => {
// Destructuring props in the function argument
const StatelessBookDisplay = ({ updateBook, book }) => {
  return(
    <View>
      <Text style={ styles.text } onPress={ updateBook }>
        { book }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 9,
    fontSize: 24
  }
})

// Stateless components are often referred to as function components,
// because they can be written as functions in javascript

export default StatelessBookDisplay;