import $ from 'jquery'

export const getSnippets = (creds) => {
  return function(dispatch) {
    $.ajax({
      method: 'GET',
      url: window.api + '/snippets'

    }).then((snippets) => {
      dispatch({
        type: 'SET_SNIPPETS',
        snippets: snippets.snippets
      })
    })
  // .catch(err => dispatch(authError(err)))
  }
}


window.getSnippets = getSnippets
