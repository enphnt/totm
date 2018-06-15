import React, { Component } from 'react';
import { AppRegistry, Text, View, Alert, TextInput, Button } from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{ padding: 100 }}>
        <TextInput
          style={{ height: 70 }}
          placeholder="Type text here"
          onChangeText={(text) => this.setState({ text })}
        />
        <Text style={{ padding: 20, fontSize: 45 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button
          onPress={() => {
            Alert.alert("You pushed it!");
          }}
          title="push it" />
      </View>
    )
  }
}
