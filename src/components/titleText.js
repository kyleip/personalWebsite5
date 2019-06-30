import React, { Component } from 'react';
import './funstuff.css';

export class TitleText extends Component {

  render() {

    const isMobile = window.innerWidth <= 500;

    var nameStyle;
    var paragraphStyle;
    if (isMobile){
        nameStyle = {
            color: 'black',
            backgroundColor: 'white',
            fontSize: '50px',
            fontFamily: 'Oleo Script',
            marginBottom: '0px'
          }
        
        paragraphStyle = {
            color: 'black',
            backgroundColor: 'white',
            fontSize: '15px',
            fontFamily: 'Open Sans'
        }
    } else {
        nameStyle = {
            color: 'black',
            backgroundColor: 'white',
            fontSize: '50px',
            fontFamily: 'Oleo Script',
            marginBottom: '0px'
          }
        
        paragraphStyle = {
            color: 'black',
            backgroundColor: 'white',
            fontSize: '15px',
            fontFamily: 'Open Sans'
        }
    }


    return (
        <div>
            <p style={{...nameStyle,color:this.props.titleColor}}>Kyle Ip </p>
            <p style={{...paragraphStyle,color:this.props.textColor}}>
                Full Stack Software Engineer
            </p>
            <p style={{...paragraphStyle,color:this.props.textColor}}>
                Click my face to learn more about me!
            </p>
        </div>
    )
  }
}



  
export default TitleText;