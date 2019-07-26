import React from 'react';
import ReactDOM from 'react-dom';
import {EditorState, RichUtils} from 'draft-js';
import TopBar from './top.js';
import Page from "./page.js"


class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty(),val:[<Page handleOverflowChange={this.handleOverflowChange}/>],};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.page=new Page();
  }
  handleKeyCommand(command, editorState) {
    console.log("came here");
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  bold=()=>
  {
    this.setState({val:1});

    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));

  }
  underline=()=>
  {
    this.setState({val:2});
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }
  italics=()=>
  {
    this.setState({val:3});
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }
  highligth=()=>
  {
    this.setState({val:4});
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    
  }
  handleOverflowChange=()=>
    {
      console.log("overflow");
      this.add();
    }
  sub=()=>
  {
    if(this.state.val.)
    this.setState({val:this.state.val.splice(0,this.state.val.length-1)});
  }
  add=()=>
  {
    this.setState({val:this.state.val.concat([<Page handleOverflowChange={this.handleOverflowChange}/>])});
  }

  render() {
      return (

    <div style={{textAlign:"center",overflow:"scroll" }}>
      
      <TopBar bold={this.page.bold} underline={this.underline} italics={this.italics} highligth={this.highligth}/>
      <div>
      {this.state.val}
      </div>
      <button onClick={this.add} className="btn btn-primary">+</button>
      <button onClick={this.sub} className="btn btn-primary">-</button>
    </div> 
    );
  }
}

ReactDOM.render(
  <MyEditor />,
  document.getElementById('root')
);