import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendList extends Component {
  render() {
    console.log(this.props);
    return;
  }

}

const mapStateToProps = (state) => {
  return { friends: state.friends };
};

export default connect(mapStateToProps)(FriendList);
