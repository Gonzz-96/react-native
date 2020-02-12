import React from 'react';
import { 
  View,
  Text,
  StyleSheet 
} from 'react-native';

class DestructuringComponent extends React.Component {

  constructor() {
    super() 
    this.state = {
      book: 'React Native in Action'
    }
  }

  updateBook() {
    this.setState({ book: 'Express in Action'})
  }

  render() {
    // destructureing prop
    const { book } = this.state
    return (
      <BookDisplay
        updateBook={ () => this.updateBook() }
        book={ book } />
    )
  }
}

class BookDisplay extends React.Component {
  render() {
    const { book, updateBook } = this.props
    return (
      <View> 
        <Text
          style={styles.text}
          onPress={ updateBook }>{ book }</Text>
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

export default DestructuringComponent;