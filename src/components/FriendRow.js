import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from './../actions'

class FriendRow extends Component {
  render() {
    console.log(this.props)
    return (
      <CardSection>
        <Text>{this.props.friendToDisplay.name}</Text>
      </CardSection>
    );
  }
}

export default connect(null, actions)(FriendRow);
