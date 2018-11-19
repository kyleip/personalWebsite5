import React, { Component } from 'react';


export class Github extends Component {

  render() {
    return (
        <div>
            <p style={{...paragraphStyle,textAlign:'center',color:'#57BC90'}}>Scroll down!</p>
            <p style={titleStyle}>Github</p>
            <ColoredLine color="#E24E42" />
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              <a href = 'https://github.com/kyleip' target = "_blank">My Github</a>
            </p>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              Click the link to view my github!
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
  color: '#57BC90'
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

export default Github;