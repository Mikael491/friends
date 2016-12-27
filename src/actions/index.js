export const selectedFriend = (friendId) => {
  return {
    type: 'select-freind',
    payload: friendId
  };
};
