import React, { Component } from 'react';
import Pdf from '../static/kyle-ip-resume.pdf';


export class Resume extends Component {

  render() {
    return (
        <div>
            <p style={{...paragraphStyle,textAlign:'center',color:'#94618E'}}>Scroll down!</p>
            <p style={titleStyle}>Resume</p>
            <ColoredLine color="#E9B000" />
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              <a href = {Pdf} target = "_blank">Download Resume as PDF</a>
            </p>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              Click the link to view my resume!
            </p>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              Be sure to check frequently for updates!
            </p>
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
  marginLeft: '50px',
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
  marginRight: '1em',
  marginBottom: '5em'
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 5
      }}
  />
);

export default Resume;