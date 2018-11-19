import React, { Component } from 'react';
import './projects.css';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export class Projects extends Component {

  render() {
    return (
        <div>
            <p style={titleStyle}>Projects</p>
            <ColoredLine color="#57BC90" />
            <p style={paragraphStyle}> 
            This is a page where I'll post demos of the previous projects that I've done.
            </p>
            <p style={paragraphStyle}> 
            Be sure to check frequently for updates!
            </p>
            <Link to='/'>
              <Button circular icon='big left arrow' 
                style={{...buttonStyle,backgroundColor:'#57BC90'}}
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
  color: '#E24E42'
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
  color:'#E24E42',
  float: 'left',
  marginLeft:'50px',
  marginTop:'30px'
 }


export default Projects;