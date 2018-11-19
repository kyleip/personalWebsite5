import React, { Component } from 'react';
import './projects.css';

export class Projects extends Component {

  render() {
    return (
        <div>
            <p style={{...paragraphStyle,textAlign:'center',color:'#E24E42'}}>Scroll down!</p>
            <p style={titleStyle}>Projects</p>
            <ColoredLine color="#57BC90" />
            <p style={{...paragraphStyle,marginLeft: '5em'}}>  
            This is a page where I'll post demos of the previous projects that I've done.
            </p>
            <p style={{...paragraphStyle,marginLeft: '5em'}}> 
            Be sure to check frequently for updates!
            </p>
            {/* <Link to='/'>
              <Button circular icon='big left arrow' 
                style={{...buttonStyle,backgroundColor:'#57BC90'}}
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
  color: '#E24E42'
}

const paragraphStyle = {
  color: 'black',
  backgroundColor: 'white',
  fontSize: '15px',
  fontFamily: 'Open Sans',
  textAlign: 'left',
  marginTop: '30px',
  marginRight: '1em'
}

const ColoredLine = ({ color }) => (
  <hr
      style={{
          backgroundColor: color,
          height: 5
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