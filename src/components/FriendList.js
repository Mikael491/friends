import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import FriendRow from './FriendRow';

class FriendList extends Component {
  componentWillMount() {
      const lv = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = lv.cloneWithRows(this.props.friends);
  }

  renderRow(friend) {
    return (
      <FriendRow
        friendToDisplay={friend}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return (
      { friends: state.friends }
  );
};


export default connect(mapStateToProps)(FriendList);
