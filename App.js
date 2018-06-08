import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://media.licdn.com/dms/image/C5103AQFkB6B9cYYAXA/profile-displayphoto-shrink_200_200/0?e=1529607600&v=beta&t=sYbINtA1eZLF4KFlPesyj1GLt-2w9isJszM-Nl5m4BA'
    };
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Greeting name='Hanna' style={{ zIndex: 10 }} />
        <Image source={pic} style={{ width: 293, height: 510, zIndex: -10 }} />
        <Text> Don't you look great! </Text>
      </View>
    );
  }
}
