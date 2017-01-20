import { createStore } from 'redux';
// import { snippetsReducer } from './snippets_reducer';


let initialState = {
  snippets: [{
    text: "this is a snippet",
    title: "first snippet"
  }],
  user: null
}

let reducer = function(state = initialState, action) {

  let assign = obAssign(state);

  switch (action.type) {
    case 'USER_LOGIN':
      return assign('user', action.user)

    case 'SET_SNIPPETS':
      return assign('snippets', action.snippets);

    default:
      return state
  }
}

function obAssign(state) {
  return function(field, value) {
    let updatedStateSlice = {};
    updatedStateSlice[field] = value;
    return Object.assign({}, state, updatedStateSlice)
  }
}


let store = createStore(reducer);

window.store = store;

export default store;
