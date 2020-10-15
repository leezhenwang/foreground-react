export function reducer(state, action) {
  switch (action.type) {
    case 'setNavArray':
      return {
        ...state,
        navArray: action.payload
      };
    case 'setVisit_num':
      return {
        ...state,
        visit_num: action.payload
      };
    default:
      throw new Error();
  }
}