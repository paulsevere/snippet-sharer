import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { connect } from 'react-redux'
import LoginModal from '../components/Login'
import LoginForm from '../components/loginForm'
class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      loginModal: false,
      signupModal: true
    };
  }
  toggleLogin = () => {
    this.setState({
      loginModal: !this.state.loginModal
    })
  }

  handleChange = (event, index, value) => this.setState({
    value
  });

  render() {
    return (
      <div>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <FlatButton label="login" onTouchTap={this.toggleLogin}/>
            <FlatButton label="signup" onTouchTap={this.toggleLogin}/>

          <IconMenu
      iconButtonElement={
      <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
      }
      >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>

      </Toolbar>
      <LoginModal title="log in" toggle={this.toggleLogin} open={this.state.loginModal}>
      <LoginForm/>
      </LoginModal>
      <LoginModal title="sign up" toggle={this.toggleLogin} open={this.state.signupModal}>
      <LoginForm signUp={true}/>
      </LoginModal>

    </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
