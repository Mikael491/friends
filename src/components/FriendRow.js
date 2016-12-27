import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from './../actions'

class FriendRow extends Component {
  render() {
    const { id, name, description } = this.props.friendToDisplay;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedFriend(id)}
      >
        <View>
          <CardSection>
            <Text>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, actions)(FriendRow);
