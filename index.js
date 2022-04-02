marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState("");

    render() {
        const { text } = this.state;
    }

    return(
        <div className="text-center px-4">
            <h1 className="p-4">My Markdown Previewer</h1>
            <textarea
                name="text"
                id="text"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea"    
            ></textarea>
            <h3 className="mt-3">Output</h3>
            <Preview markdown={text} />
        </div>
    )
}

const markdown = marked(text);

function Preview({ markdown }){
    return (
        <div
            dangerouslySetInnerHTML={{
            __html: markdown}}
            id="preview"
            className="text-center"
        ></div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));