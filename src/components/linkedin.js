import React, { Component } from 'react';


export class LinkedIn extends Component {
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
            <p style={titleStyle}>LinkedIn</p>
            <ColoredLine color="#EB6E80"/>
            <p style={{...paragraphStyle,marginLeft: '20em'}}> 
              Click <a href = 'https://www.linkedin.com/in/kyleip/' target = "_blank">here</a> to view my LinkedIn! Connect with me, 
              and let me know what you think of the site or my projects!
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
  color: '#4EC5C1'
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

export default LinkedIn;