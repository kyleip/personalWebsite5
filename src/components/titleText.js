import React, { Component } from 'react';
import './funstuff.css';

export class TitleText extends Component {

  render() {
    return (
        <div>
            <p style={nameStyle}>Kyle Ip </p>
            <p style={paragraphStyle}>
                Full Stack Software Engineer. Freelance Web Developer.
            </p>
            <p style={paragraphStyle}>
                Click my face to learn more about me!
            </p>
        </div>
    )
  }
}

const nameStyle = {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '50px',
    fontFamily: 'Oleo Script',
    marginBottom: '0px'
  }

const paragraphStyle = {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '15px',
    fontFamily: 'Open Sans'
}


  
export default TitleText;