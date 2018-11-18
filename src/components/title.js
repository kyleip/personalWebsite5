import React, { Component } from 'react';
import './title.css';
import Menu from './menu';


export class Title extends Component {

  render() {
    return (
        <div>
            <div style={{marginTop: '50px', marginBottom: '30px'}}>
                <Menu></Menu>
            </div>
            <div>
                <p style={nameStyle}>Kyle Ip </p>
                <p style={paragraphStyle}>
                    Full Stack Software Engineer. Freelance Web Developer.
                </p>
                <p style={paragraphStyle}>
                    Click my face to learn more about me!
                </p>
            </div>
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


  
export default Title;