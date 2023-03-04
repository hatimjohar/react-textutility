import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Please enter text here")

    const onButton1Click = () => {

        // let newText = text.toUpperCase();
        setText(text.toUpperCase());
        props.alert("success", "Converted to uppercase");

    }

    const onButton2Click = () => {

        setText(text.toLowerCase());
        props.alert("success", "Converted to lowercase");
    }

    const onButton3Click = () => {

        setText("");
        props.alert("success", "cleared textbox");

    }

    const onTextChange = (event) => {
        console.log("text is changed");
        setText(event.target.value);
    }

    return (
        <>
            <div>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label">{props.title}</label>
                    <textarea className="form-control" value={text} onChange={onTextChange} id="mybox" rows="8"></textarea>

                </div>
                <button type="button" onClick={onButton1Click} className="btn btn-primary mx-1">{props.button1}</button>
                <button type="button" onClick={onButton2Click} className="btn btn-primary mx-1">{props.button2}</button>
                <button type="button" onClick={onButton3Click} className="btn btn-primary mx-1">{props.button3}</button>

            </div>
            <div className="container">
                <h1>Text Summary</h1>
                <p>
                    text character count is {text.replace(/\s+/g, '').length} and words are {text.split(' ').length - 1}
                </p>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    title: "Please enter text",
    button1: "Convert to Upper Case",
    button2: "Convert to Lower Case",
    button3: "Clear"
}