export function reducer(state, action) {
  switch (action.type) {
    case 'setNavArray':
      console.log('reducerstate',{
        ...state,
        navArray: action.payload
      })
      return {
        ...state,
        navArray: action.payload
      };
    default:
      throw new Error();
  }
}