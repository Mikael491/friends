export default (state = null, action) => {
  switch (action.type) {
    case 'select-friend':
      return action.payload;
    default:
      return state;
  }
};
