export const selectedFriend = (friendId) => {
  return {
    type: 'select-friend',
    payload: friendId
  };
};
