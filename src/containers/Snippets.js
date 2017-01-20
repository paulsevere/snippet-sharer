import React from 'react';
import { connect } from 'react-redux';
import { getSnippets } from '../actions/snippets'
import { SnippetsTable } from '../components/SnippetTable'
import { SnippetItem } from '../components/SnippetTableItem'



class Snippets extends React.Component {
  constructor(props) {
    super(props);
    this.cool = "fun";
    this.props.dispatch(getSnippets())
  }

  render() {
    let {snippets} = this.props;
    return (
      <div>
      <SnippetsTable>
        {snippets.map(snip => {
        return (<SnippetItem key={snip.id} snippet={snip}/>)
      })}
      </SnippetsTable>
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
    snippets: state.snippets
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Snippets)
