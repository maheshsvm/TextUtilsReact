import React , {useState} from 'react';

export default function TextForm(props) {
    const [text , setText] = useState("");
    const [voice , setVoice] = useState(1);

    let textareaStyle = {
        backgroundColor : props.mode === 'dark'?"#222528":"white",
        color : props.mode === 'dark'?"white":"black"
    }

    const onChangeText = (event)=>{
        setText(event.target.value)
    }
    const convertUppercase = () =>{
        setText(text.toUpperCase());
        props.updateAlert("converted to uppercase" , "success");

    }

    const convertLowercase = () =>{
        setText(text.toLowerCase());
        props.updateAlert("converted to lowercase" , "success");

    }

    const speak = () => {
        console.log('first')
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        msg.voice = voices[voice];
        msg.text = text;
        window.speechSynthesis.speak(msg);
        console.log('end')
      }

    const updateVoice = (event) =>{
        console.log(event.target);
        setVoice(event.target.value)
    }
    

    const copyText = () =>{
        navigator.clipboard.writeText(text)
        props.updateAlert("Text copied to clipboard" , "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.updateAlert("Extra spaces removed" , "success");

    }

    const clearText = () =>{
        setText('');
        props.updateAlert("Text cleared" , "success");

    }
    return (
        <>
            <h1 id='heading' style={props.modeStyle}>{props.heading}</h1>
            <div className="container mb-3 my-3" style={props.modeStyle}>
                <textarea className="form-control" value = {text} onChange = {onChangeText} id="textBox" rows="8" placeholder='Enter your text' style={textareaStyle} ></textarea>
                <button className="btn btn-danger mx-2 my-2" onClick = {convertUppercase}>Conver to Uppercase</button>
                <button className="btn btn-danger mx-2 my-2" onClick = {convertLowercase}>Conver to Lowercase</button>
                <button className="btn btn-danger mx-2 my-2" onClick = {copyText}>Copy Text</button>
                <button className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-1" onClick={clearText}>Clear text</button>
                
                <div className="speak d-flex flex-row align-items-center justify-content-center">
                    <label htmlFor="voice"  className="form-label mx-5 speak-label">Select Voice</label>
                    <input type="range" className="form-range mx-4 my-2" min="1" max="20" value={voice} onChange={updateVoice} id="voiceInput"></input>
                <button type="submit" onClick={speak} className="btn btn-danger mx-2 my-2">Speak</button>

                </div>

            </div>

            <div className="container" style={props.modeStyle}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
