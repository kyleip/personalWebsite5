import React, { Component } from 'react';
import './funstuff.css';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export class Funstuff extends Component {

  render() {
    return (
        <div>
            <p style={titleStyle}>Fun Stuff!</p>
            <ColoredLine color="#94618E" />
            <p style={paragraphStyle}> 
            Believe it or not, I like things other than coding!
            Some of my hobbies are photography, playing the trumpet in my college pep band, 
            listening to music, and swimming. I will post some links here so that you can 
            check it out!
            </p>
            <p style={paragraphStyle}> 
            Be sure to check frequently for updates!
            </p>
            <Link to='/'>
              <Button circular icon='big left arrow' 
                style={{...buttonStyle,backgroundColor:'#94618E'}}
              />
            </Link>
        </div>
    )
  }
}

  
const titleStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '50px',
  fontFamily: 'Oleo Script',
  marginBottom: '0px',
  textAlign: 'left',
  marginLeft: '50px',
  marginTop: '40px',
  color: '#E9B000'
}

const paragraphStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '15px',
  fontFamily: 'Open Sans',
  textAlign: 'left',
  marginLeft: '150px',
  marginTop: '30px',
  marginRight: '100px'
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 5
      }}
  />
);

const buttonStyle = {
  height:'75px',
  width:'75px',
  color:'#E9B000',
  float: 'left',
  marginLeft:'50px',
  marginTop:'30px'
 }


export default Funstuff;