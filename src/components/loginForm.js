import React from 'react';
import TextField from 'material-ui/TextField';

export default class LoginForm {

  render() {
    return (
      <div style={{
        marginLeft: "50px"
      }}>
  <TextField
      floatingLabelText="email"
      />
  <br/>
      <TextField
      floatingLabelText="password"
      />
  <br/>
    { props.signUp ? <TextField
      floatingLabelText="confirm password"
      /> :
        null

      }
  </div>

    )
  }
}
