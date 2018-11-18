import React, {Component} from 'react';
import { Button, Image } from 'semantic-ui-react';
import './menu.css'


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
          <a href='#' class='center'
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
          </a>
          {this.state.isExpanded && <a href='https://github.com/kyleip' class='deg0'>
            <Button circular icon='big github'class='deg0' 
              style={{...buttonStyle,backgroundColor:'#E24E42'}}
            />
          </a>}
          {this.state.isExpanded && <a href='/funstuff' class='deg45'>
            <Button circular icon='big music' 
              style={{...buttonStyle,backgroundColor:'#E9B000'}}
            />
          </a>}
          {this.state.isExpanded && <a href='/projects' class='deg135'>
            <Button circular icon='big coffee' 
              style={{...buttonStyle,backgroundColor:'#94618E'}}
            />
          </a>}
          {this.state.isExpanded && <a href='http://localhost:5000/resume' class='deg180'>
            <Button circular icon='big sticky note outline' 
              style={{...buttonStyle,backgroundColor:'#57BC90'}}
            />
          </a>}
          {this.state.isExpanded && <a href='https://www.linkedin.com/in/kyleip' class='deg225'>
            <Button circular icon='big linkedin alternate' 
              style={{...buttonStyle,backgroundColor:'#4EC5C1'}}
            />
          </a>}
          {this.state.isExpanded && <a href='/about' class='deg315'>
            <Button circular icon='big question circle' 
              style={{...buttonStyle,backgroundColor:'#EB6E80'}}
            />
          </a>}
      </div>
      )
    }
}

 const buttonStyle = {
  height:'75px',
  width:'75px',
  color:'white',
  
 }

 const redButton = [buttonStyle, {backgroundColor:'#E24E42'}]