let initalState = `# Kira Martorano's
# Markdown Previewer
[Learn more about Kira Martorano here](http://xkira1313.com)
<dl>
<dt>HTML quick tips</dt>
<dd>Things you may not know</dd>

<dt>Did you know that when using html</dt>
<dd>sometimes you may want a section of inline cord like so?</dd>
</dl>

## Thanks so much for the support

- don't forget
- to code
- as much as you can!

\`Here is an example of inline code\`

\`\`\`
function exampleOfMultiLineCode() {

var a = 10;
for (let i = 0; i < a, i++)
}
\`\`\`

[![Kira Martorano's Logo:](https://i1.sndcdn.com/avatars-000627434832-w6v6fq-t500x500.jpg)]

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

**Here is some bolded text**`

marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState(initalState);

    return (
        <div className="text-center px-4">
            <h1 className="p-4">My Markdown Previewer</h1>
            <h3 className="mt-3 inputheading">Input</h3>
            <textarea
                name="text"
                id="editor"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea"    
            >
                
            </textarea>
            <h3 className="mt-3 outputheading">Output</h3>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { renderer: renderer }),
            }}
            id="preview"
        ></div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));