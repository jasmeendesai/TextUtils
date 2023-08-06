// import React, {useState} from "react";

function About(props) {
  //   const [myStyle, setMystyle] = useState({
  //     color : "white",
  //     backgroundColor : "black",
  //     border : '1px solid white'
  // })
  const myStyle = {
    color : props.mode === 'dark' ? 'white' : '#2C3E50',
    backgroundColor : props.mode === 'dark' ? '#546d93' : 'white',
  }
// #546d93
  return (
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : '#2C3E50'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      <strong>Word and character counting</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle}>
      Accurately count the number of words and characters in your text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>Text manipulation</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
      Remove extra spaces, clear text, and convert text to uppercase or lowercase effortlessly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <strong>Copy and paste</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
      Seamlessly copy the manipulated text to your clipboard for easy sharing and editing.
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default About;
