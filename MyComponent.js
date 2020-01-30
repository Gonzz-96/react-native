// This one is a deprecated version

// const React = require('react')
// const ReactNative = require('react-native')
// const { View, Text } = ReactNative

// const MyComponent = React.createClass({
//   render() {
//     return 
//       <View>
//         <Text>Hello, world</Text>
//       </View>
//   }
// });

import React, { Component } from 'react'
import { View, Text } from 'react-native'

class MyStatefulComponent extends Component {
  render() {
    return (
      <View>
        <Text>Hello, stateful world!</Text>
      </View>
    )
  }
}

const MyStatelessComponent = () => (
  <View>
    <Text>Hello, stateless world!</Text>
  </View>
)

const Header = () => (
  <View>
    <Text>Header</Text>
  </View>
)

const Main = () = (
  <View>
    <Text>Main</Text>
  </View>
)

const Footer = () => (
  <View>
    <Text>Footer</Text>
  </View>
 )

class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <Main />
        <Footer />
      </View>
    )
  }
}

export default Home;