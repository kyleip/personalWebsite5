import React, { Component } from 'react';


export class LinkedIn extends Component {

  render() {
    return (
        <div>
            <p style={{...paragraphStyle,textAlign:'center',color:'#4EC5C1'}}>Scroll down!</p>
            <p style={titleStyle}>LinkedIn</p>
            <ColoredLine color="#EB6E80"/>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              <a href = 'https://www.linkedin.com/in/kyleip/' target = "_blank">My LinkedIn</a>
            </p>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
              Click the link to view my LinkedIn! Connect with me, 
              and let me know what you think of the site or my projects!
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
  color: '#4EC5C1'
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

export default LinkedIn;