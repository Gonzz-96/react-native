import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class AnotherComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      book: 'React Native in Action'
    }
  }

  updateBook() {
    this.setState({
      book: 'Express in action'
    })
  }

  render() {
    return(
      <BookDisplay 
        updateBook={ () => this.updateBook() }
        book={this.state.book} />
    )
  }


}

class BookDisplay extends React.Component {
  render() {
    return (
      <View>
        <Text onPress={ this.props.updateBook }
          style={ style.text }>Touch me to update: { this.props.book }</Text>
      </View>
    ) 
  }
}

const style = StyleSheet.create({
  text: {
    padding: 9,
    fontSize: 24
  }
})

export default AnotherComponent;