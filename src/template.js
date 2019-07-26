<div className="editorContainer">
        <button className="underline" onClick={this.onUnderlineClick}>
          U
        </button>
        <button className="bold" onClick={this.onBoldClick}>
          <b>B</b>
        </button>
        <button className="italic" onClick={this.onItalicClick}>
          <em>I</em>
        </button>
        <button className="strikethrough" onClick={this.onStrikeThroughClick}>
          abc
        </button>
        <button  onClick={this.onAddImage}>
          caamehere
        </button>
        <button  onClick={this.onStrikeThroughClick}>
          abc
        </button>
        
        <button className="highlight" onClick={this.onHighlight}>
          <span style={{ background: "yellow", padding: "0.3em" }}>H</span>
        </button>
        
        <div className="editors">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            plugins={this.plugins}
            onChange={this.onChange}
          />
          <EmojiSuggestions />
          <EmojiSelect />
        </div>
      </div>