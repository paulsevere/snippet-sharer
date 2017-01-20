import React from 'react';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

function mapStateToProps(state) {
  return {
    snippets: state.snippets
  }
}


class Snippets extends React.Component {
  constructor(props) {
    super(props);
    this.cool = "fun"
  }
  render() {
    let {snippets} = this.props;
    return (
      <div>
        {snippets.map(e => {
        return e.title
      })}
    </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippets)
