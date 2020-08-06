export function reducer(state, action) {
  switch (action.type) {
    case 'setNavArray':
      return {
        ...state,
        navArray: action.payload
      };
    default:
      throw new Error();
  }
}