import React from 'react';
import AceEditor from 'react-ace';
import TextField from 'material-ui/TextField'
import 'brace/mode/javascript';
import 'brace/theme/monokai';



// Render editor
export default function(props) {
  let {snippet} = props;
  let handleTitleChange = (e) => {
    props.onTitleChange(e.target.value)
  }
  let titleDisplay = () => {
    if (props.editable) {
      return (<TextField defaultValue={snippet.title} onChange={handleTitleChange} hintText="title"></TextField>)
    }
    return (<div className="snippet-title">{snippet.title}</div>)
  }
  return (
    <div className="editor-holder">
      {titleDisplay()}
    <AceEditor
    value={snippet.text}
    mode="javascript"
    width="100%"
    theme="monokai"
    showGutter={false}
    showPrintMargin={false}
    onChange={props.onEditorChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{
      $blockScrolling: true
    }}/>
</div>
    );
}
