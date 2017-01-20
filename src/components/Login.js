import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default function LoginModal(props) {



  let handleClose = () => {
    props.toggle()
  };

  const actions = [
    <FlatButton
    label="Cancel"
    primary={true}
    onTouchTap={handleClose}
    />,
    <FlatButton
    label="Submit"
    primary={true}
    keyboardFocused={true}
    onTouchTap={handleClose}
    />,
  ];

  return (
    <div>
        <Dialog
    title={props.title}
    actions={actions}
    modal={false}
    open={props.open}
    onRequestClose={props.toggle}
    >
  {props.children}
        </Dialog>
      </div>
    );
}
