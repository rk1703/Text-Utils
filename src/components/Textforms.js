import React,{useState} from "react";



export default function Textforms(props) {
    const [text,setText]=useState('');
    const handleOnChange=(event)=>{
        console.log('onchange');
        setText(event.target.value);
    };

    const handleUpClick=()=>{
        console.log('upclicked');
        let newtext=text.toUpperCase();
        setText(newtext);
    };
  
    const handleDownClick=()=>{
        console.log('downclicked');
        let newtext=text.toLowerCase();
        setText(newtext);
    };

    const handleEraseClick=()=>{
        console.log('eraseclicked');
        let newtext='';
        setText(newtext);
    };

    const handleClearClick=()=>{
      let newtext=text.replace(/\s+/g, ' ').trim()
      setText(newtext);
    };
    
      let newtext=text.replace(/\s+/g, ' ').trim();
      if(text[0]===undefined){
       var words=0;
       var char=0;
      }
      else{
       words = newtext.split(" ").length;
       char = newtext.length - words + 1;
      }

      if(props.mode==='dark'){
       var textoutstyle={
          backgroundColor:'#151f2d',
          color:'#c8c8d4'
        };
       var textinstyle={
          backgroundColor:'#000000',
          color:'white'
        };
      }
      else{
         textoutstyle={
           backgroundColor:'#65c7c752',
           color:'black'
         };
         textinstyle={
           backgroundColor:'white',
           color:'black'
         };

      }

  return (
    <>
      <div className="mb-3 container mt-4 pb-2 rounded-3" style={textoutstyle}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>Enter Your Text Here -</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder='ENTER TEXT HERE'
          value={text}
          onChange={handleOnChange}
          style={textinstyle}
        ></textarea>
        <p>{words} words and {char} characters</p>
        <div className="container my-2">
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-success mx-1 my-1" onClick={handleDownClick}>Convert To Lower Case</button>
        <button className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear Extra Spaces</button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleEraseClick}>Erase</button>
        </div>
            
      </div>
    </>
  );
}