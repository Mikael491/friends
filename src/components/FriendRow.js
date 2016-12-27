import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class FriendRow extends Component {
  render() {
    return (
      <CardSection>
        <Text>{this.props.friendToDisplay.name}</Text>
      </CardSection>
    );
  }
}

export default FriendRow;
