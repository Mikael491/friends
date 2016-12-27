import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from './../actions';

class FriendRow extends Component {
  renderDescription(description) {
    if (this.props.friendToDisplay.id === this.props.selectedFriendId) {
      return (
          <Text>{description}</Text>
      );
    }
  }

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
          {this.renderDescription(description)}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedFriendId: state.selectedFriendId };
};

export default connect(mapStateToProps, actions)(FriendRow);
