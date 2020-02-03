import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class MyDynamicPropsComponent extends React.Component {
  render() {
    // This is a Dynamyc Property
    let myBook = 'Dynamic: React Native in Action';
    return(
      <BookDisplay book={ myBook } />
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

export default MyDynamicPropsComponent;