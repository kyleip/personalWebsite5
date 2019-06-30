import React, { Component } from 'react';
import './about.css';

export class About extends Component {
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
            <p style={titleStyle}>About Me</p>
            <ColoredLine color="#4EC5C1" />
            <p style={{...paragraphStyle,marginLeft: '20rem'}}> 
            Hi, I am currently a software engineer in the San Francisco Bay Area. In August, I will start working as a software engineer at Pure Storage,
            where I interned last summer. I am interested in web development, design, and cloud computing.
            </p>
            <p style={titleStyle}>About This Site</p>
            <ColoredLine color="#4EC5C1" />
            <p style={{...paragraphStyle,marginLeft: '20rem'}}> 
            This is my personal website that I use as a portfolio to show off my previous work.
            I made it using React. You may access the public github repository 
            for it <a href='https://github.com/kyleip/personalWebsite5'> here </a>.
            </p>
            <p style={{...paragraphStyle,marginLeft: '20rem'}}> 
            Feel free to hit any other buttons and continue exploring! 
            </p>
            {/* <Link to='/'>
                <Button circular icon='big left arrow' 
                style={{...buttonStyle,backgroundColor:'#4EC5C1'}}
                />
            </Link> */}
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
    marginTop: '5rem',
    marginRight: '15rem',
    color: '#EB6E80'
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

  
export default About;

