import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class LoginModal extends React.Component {
  state = {
    open: this.props.open,
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.props.toggle()
  };

  render() {
    const actions = [
      <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
      />,
      <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
      title="Dialog With Actions"
      actions={actions}
      modal={false}
      open={this.props.open}
      onRequestClose={this.props.toggle}
      >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
      );
  }
}
