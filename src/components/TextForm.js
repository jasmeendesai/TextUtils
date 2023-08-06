import React, {useState} from 'react'


function TextForm(props) {

    const handleUpClick = ()=>{
        let newtext= text.toUpperCase()
        setText(newtext)
        props.showAlert('Changed to UpperCase', 'success')
    }

    const handleLowClick = ()=>{
        let newtext= text.toLowerCase()
        setText(newtext)
        props.showAlert('Changed to LowerCase', 'success')
    }

    const handleClearClick = ()=>{
        
        setText('')
        setCopy('copy')
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        setCopy('copied')
        props.showAlert('Copied to clip board', 'success')
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/).join(" ")
        setText(newText)
        props.showAlert('Removed extra spaces', 'success')
    }

    const handleOnChange = (e)=>{
        
        setText(e.target.value)
        setCopy('copy')
    }

    
    
    const [text, setText] = useState('')
    const [copy, setCopy] = useState('copy')

  return (
    <>
    <div className="container" style={{color : props.mode==='light' ? 'black' : 'white'}}>
    <h2>{props.textarea}</h2>
    <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='light'? 'white' : '#38516a', color : props.mode==='light' ? 'black' : 'white'}} value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
    </div>
    <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleUpClick}>convert To UpperCase</button>
    <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleLowClick}>convert To LowerCase</button>
    <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleCopy}>{copy}</button>
    <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className='btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleClearClick}>clear text</button>
    
    </div>
    <div className="container my-2" style={{color : props.mode==='light' ? 'black' : 'white'}}>
        <h2>Your Text Summary</h2>
        <p>words {text.split(/\s+/).filter((e)=>{return e.length!==0}).length} characters {text.length}</p>
        <p>{0.008*text.split(/\s+/).filter((e)=>{return e.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length >0 ? text : "Nothing to Preview"}</p>
    </div>
    </>
  )
}

export default TextForm
