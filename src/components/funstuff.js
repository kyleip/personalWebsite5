import React, { Component } from 'react';
import './funstuff.css';

export class Funstuff extends Component {

  render() {
    return (
        <div>
            <p style={{...paragraphStyle,textAlign:'center',color:'#E9B000'}}>Scroll down!</p>
            <p style={titleStyle}>Fun Stuff!</p>
            <ColoredLine color="#94618E" />
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
            Believe it or not, I like things other than coding!
            Some of my hobbies are photography, playing the trumpet in my college pep band, 
            listening to music, and swimming. I will post some links here so that you can 
            check it out!
            </p>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
            Be sure to check frequently for updates!
            </p>
            {/* <Link to='/'>
              <Button circular icon='big left arrow' 
                style={{...buttonStyle,backgroundColor:'#94618E'}}
              />
            </Link> */}
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
  color: '#E9B000'
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

export default Funstuff;