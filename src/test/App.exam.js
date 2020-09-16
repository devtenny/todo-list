import React, { Component } from 'react';
import './App.css';

import ChangeColor from './component/ChangeColor';

class App extends Component {
  
  state = {
    color: "yellow"
  }

  handleClick = () => {
    if(this.state.color === "yellow") {
      this.setState({
        color: "red"
      })
    } else {
      this.setState({
        color: "yellow"
      })
    }
  }

  render() {
    return(
      <div>
        <div style={{color: this.state.color}}>
          <ChangeColor
            onClick={this.handleClick}/>
        </div>
      </div>
    )
  };
}

export default App;
