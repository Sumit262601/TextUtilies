import React, { useState } from 'react';
// import copy from "copy-to-clipboard";

const TextForm = (props) => {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handerUpClick = () => {
        let newText = text.toUpperCase();
        if (newText.length === 0) {
            props.showAlert("Write something to uppercase text", "danger");
        }
        else {
            setText(newText);
            props.showAlert("Convert to Uppercase", "success");
        }
    }

    const handerLoClick = () => {
        let newText = text.toLowerCase()

        if (newText.length === 0) {
            props.showAlert("Write something to lowercase", "danger");
        }
        else {
            setText(newText);
            props.showAlert("Convert to Lowercase", "success");
        }
    }

    const handerClear = () => {
        let newText = ("");
        setText(newText)
        props.showAlert("Clear text", "success");
    }

    const copyToClipboard = () => {
        let text = document.getElementById("myBox");
        if (text.value.trim() === "") {
            props.showAlert("Text something to copy text", "danger");
        }
        else {
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copy to clipboard", "success");
        }
    }

    const handerRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className='btn btn-success mx-2 my-1' onClick={handerUpClick}>Upper Case</button>
                <button className='btn btn-success mx-2 my-1' onClick={handerLoClick}>Lower Case</button>
                <button className='btn btn-success mx-2 my-1' onClick={handerClear}>Clear Text</button>
                <button className='btn btn-success mx-2 my-1' onClick={copyToClipboard}>Cpoy to Clipboard</button>
                <button className='btn btn-success mx-2 my-1' onClick={handerRemoveSpace}>Remove spaces</button>
            </div>
            <div className="container my-5">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((elements) => { return elements.length !== 0 }).length} <b>words</b> and {text.length} <b>characters</b></p>
                <p>{0.008 * text.split(" ").length} <b>Mintues reads</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in above textarea."}</p>
            </div>
        </>
    );
}

export default TextForm;