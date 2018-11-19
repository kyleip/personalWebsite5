import React, { Component } from 'react';
import './about.css';
import { Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export class About extends Component {

  render() {
    return (
        <div>
            <p style={titleStyle}>About Me</p>
            <ColoredLine color="#4EC5C1" />
            <p style={paragraphStyle}>
            I am currently a senior Computer Science major at Santa Clara University with an emphasis in Algorithms and Complexity. 
            Last summer, I was a software engineering intern at Pure Storage, working on the Cloud Infrastructure team.
            Currently open to full time, new grad, full stack software engineering positions, 
            as well as freelance web development projects.
            </p>
            <p style={titleStyle}>About This Site</p>
            <ColoredLine color="#4EC5C1" />
            <p style={paragraphStyle}>
            This is my personal website that I use as a portfolio to show off my previous work.
            I made it using React and Node.js. You may access the public github repository 
            for it <a href='https://github.com/kyleip/personalWebsite5'> here </a>.
            </p>
            <p style={paragraphStyle}>
            Feel free to hit the back button and continue exploring! 
            </p>
            <Link to='/'>
                <Button circular icon='big left arrow' 
                style={{...buttonStyle,backgroundColor:'#4EC5C1'}}
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
    color: '#EB6E80'
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
    color:'#EB6E80',
    float: 'left',
    marginLeft:'50px',
    marginTop:'30px'
   }
  
export default About;

