import React, { Component } from 'react';
import './funstuff.css';

export class Funstuff extends Component {
  scrollToBottom = () => {
    this.newInfo.scrollIntoView({ behavior: "smooth" });
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
        <div>
            <p style={titleStyle}>Fun Stuff!</p>
            <ColoredLine color="#94618E" />
            <p style={{...paragraphStyle,marginLeft: '20em'}}> 
            Believe it or not, I like things other than coding!
            Some of my hobbies are photography, playing the trumpet in my college pep band, 
            listening to music, and swimming. I will post some links here so that you can 
            check it out!
            </p>
            
            <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.newInfo = el; }}>
            </div>
        </div>
    )
  }
}

  
const titleStyle = {
  backgroundColor: 'white',
  fontSize: '50px',
  fontFamily: 'Oleo Script',
  marginBottom: '0px',
  textAlign: 'left',
  marginLeft: '15rem',
  marginRight: '15rem',
  marginTop: '40px',
  color: '#E9B000'
}

const paragraphStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '15px',
  fontFamily: 'Open Sans',
  textAlign: 'left',
  marginTop: '30px',
  marginRight: '15rem',
  marginBottom: '5em'
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 5,
          marginLeft: '12rem',
          marginRight: '12rem',
      }}
  />
);

export default Funstuff;