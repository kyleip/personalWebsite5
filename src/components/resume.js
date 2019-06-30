import React, { Component } from 'react';
import Pdf from '../static/kyle-ip-resume.pdf';


export class Resume extends Component {
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
            <p style={titleStyle}>Resume</p>
            <ColoredLine color="#E9B000" />
            <p style={{...paragraphStyle,marginLeft: '20em'}}> 
              Click <a href = {Pdf} target = "_blank">here </a> to view my resume!
            </p>
            <p style={{...paragraphStyle,marginLeft: '20em'}}> 
              Be sure to check frequently for updates!
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
  color: '#94618E'
}

const paragraphStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '15px',
  fontFamily: 'Open Sans',
  textAlign: 'left',
  marginTop: '30px',
  marginRight: '15em',
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

export default Resume;