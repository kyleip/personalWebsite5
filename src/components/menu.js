import React, {Component} from 'react';
import { Button, Image } from 'semantic-ui-react';
import './menu.css';
import {Link} from 'react-router-dom';


export default class Menu extends Component {
    constructor () {
      super()
      this.state = {
        isExpanded: false
      }
    }
    toggleExpanded () {
      this.setState({
        isExpanded: !this.state.isExpanded
      })
    }
    
    render () {
      return (
        <div class='circle-container' style={{right:"11px"}}>
          <Link to='/' class='center'
            style={{width:"300px",height:"300px"}}
          >
          <Image 
            onClick={this.toggleExpanded.bind(this)}
            src= {process.env.PUBLIC_URL + '/static/me_cropped.jpg'} 
            style={{display:"inline-block", 
            // alignItems:"center", valign:"middle",
            width:"300px",height:"300px",
            maxWidth:"1000%",
            right:"110px", bottom:"113px"}} 
            circular 
          />
          </Link>
          {this.state.isExpanded && <Link to='/projects' class='deg0'>
            <Button circular icon='big coffee'
              style={{...buttonStyle,backgroundColor:'#E24E42'}}
            />
          </Link>}
          {this.state.isExpanded && <Link to='/funstuff' class='deg45'>
            <Button circular icon='big music' 
              style={{...buttonStyle,backgroundColor:'#E9B000'}}
            />
          </Link>}
          {this.state.isExpanded && <a href='http://localhost:5000/resume' class='deg135'>
            <Button circular icon='big sticky note outline ' 
              style={{...buttonStyle,backgroundColor:'#94618E'}}
            />
          </a>}
          {this.state.isExpanded && <a href='https://github.com/kyleip' class='deg180'>
            <Button circular icon='big github' 
              style={{...buttonStyle,backgroundColor:'#57BC90'}}
            />
          </a>}
          {this.state.isExpanded && <a href='https://www.linkedin.com/in/kyleip' class='deg225'>
            <Button circular icon='big linkedin' 
              style={{...buttonStyle,backgroundColor:'#4EC5C1'}}
            />
          </a>}
          {this.state.isExpanded && <Link to='/about' class='deg315'>
            <Button circular icon='big question circle' 
              style={{...buttonStyle,backgroundColor:'#EB6E80'}}
            />
          </Link>}
      </div>
      )
    }
}

 const buttonStyle = {
  height:'75px',
  width:'75px',
  color:'white',
 }
