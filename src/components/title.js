import React, { Component } from 'react';
import './title.css';
import { Divider, Image } from 'semantic-ui-react';



class Title extends Component {
    

  render() {
    return (
        <div>
            <Image 
                src= {process.env.PUBLIC_URL + '/static/me_cropped.jpg'} 
                style={{display:"inline-block", alignItems:"center", valign:"middle"}} 
                size='medium' circular 
            />
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
    fontFamily: 'Oleo Script'
  }

const paragraphStyle = {
    color: 'black',
    backgroundColor: 'white',
    fontSize: '20px',
    fontFamily: 'Open Sans'
}


  
export default Title;