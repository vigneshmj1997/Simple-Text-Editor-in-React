import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { OverflowDetector } from 'react-overflow';



class Page extends React.Component
{
	constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.handleKeyCommand = this.handleKeyCommand.bind(this);

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
    handleOverflowChange=()=>
    {
      console.log("overflow");
    }

    onChange=(editorState)=>
    {
        this.setState({editorState});
    }
    render()
	  {
		  return(
       <div style={{width:"210mm", height:"297mm" ,maxHeight:"297mm",display:"inline-block",boxShadow:"1px 1px 20px black", margin:"30px",overflow:"hidden"}}>
			 <div style={{margin:"10px" ,borderStyle:"dotted"}}>
       <OverflowDetector onOverflowChange={this.props.handleOverflowChange}
        style={{ height:"287mm" }}>
       
       <Editor 
        		editorState={this.state.editorState}
        		handleKeyCommand={this.handleKeyCommand}
        		onChange={this.onChange}
        	/>
        </OverflowDetector>
			 </div>
       
        </div>
			)
	}

}

export default Page;