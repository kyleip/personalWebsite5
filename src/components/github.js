import React, { Component } from 'react';


export class Github extends Component {
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
            <p style={titleStyle}>Github</p>
            <ColoredLine color="#E24E42" />
            <p style={{...paragraphStyle,marginLeft: '20em'}}> 
              Click <a href = 'https://github.com/kyleip' target = "_blank">here</a> to view my github!
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
  color: '#57BC90'
}

const paragraphStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '15px',
  fontFamily: 'Open Sans',
  textAlign: 'left',
  marginTop: '30px',
  marginRight: '15rem',
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

export default Github;