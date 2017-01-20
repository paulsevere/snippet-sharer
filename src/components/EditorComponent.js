import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import TextField from 'material-ui/TextField'
import 'brace/mode/javascript';
import 'brace/theme/monokai';

function onChange(newValue) {
  console.log('change', newValue);
}

// Render editor
export default function(props) {
  let {snippet} = props;
  let handleTitleChange = (e) => {
    props.onTitleChange(e.target.value)
  }
  return (
    <div className="editor-holder">
      <TextField onChange={handleTitleChange} hintText="title"></TextField>
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
