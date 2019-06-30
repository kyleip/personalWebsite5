import React, { Component } from 'react';
import './projects.css';

export class Projects extends Component {
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
            <p style={titleStyle}>Projects</p>
            <ColoredLine color="#57BC90" />
            <p style={{...paragraphStyle,marginLeft: '20em'}}>  
            This is a page where I'll post demos of the previous projects that I've done.
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
  color: '#E24E42'
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

// const buttonStyle = {
//   height:'75px',
//   width:'75px',
//   color:'#E24E42',
//   float: 'left',
//   marginLeft:'50px',
//   marginTop:'30px'
//  }


export default Projects;