// Properties (or props) are a component's inherited
// values  that have been passed down from a parent components
// They can be static or dynamic.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyStaticPropsComponent extends React.Component {
  render() {
    // This is a Static Property (essentially, hardcoded)
    return (
      <BookDisplay book={"Static: React Native in Action"} />
    )
  }
}

class BookDisplay extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>{ this.props.book }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 9,
    fontSize: 24
  }
})

export default MyStaticPropsComponent;