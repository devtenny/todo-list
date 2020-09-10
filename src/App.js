import React, { Component } from 'react';
import './App.css';

// import ChangeColor from './component/ChangeColor';
import TodoInput from "./component/TodoInput";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";

class App extends Component {
  id = 1;
  state = {
    text: '',
    todos: [
      {id: 0, text: '예시입니다.', checked: true}
    ]
  };
  // state = {
  //   color: "yellow"
  // }

  // handleClick = () => {
  //   if(this.state.color === "yellow") {
  //     this.setState({
  //       color: "red"
  //     })
  //   } else {
  //     this.setState({
  //       color: "yellow"
  //     })
  //   }
  // }

  handleClick =  () => {
    const { text, todos } = this.state;
    this.setState({
      text: '',
      todos: todos.concat({
        id: this.id++,
        text: text,
        checked: false
      })
    })
    console.log(this.state.todos);
  }

  render() {
    return(
      <div>
        {/* <div style={{color: this.state.color}}>
          <ChangeColor
            onClick={this.handleClick}/>
        </div> */}

        <div className="todo-list">
          <div className="todo-title">
            <h3>오늘 할 일</h3>
          </div>
          <div className="todo-input">
            <TodoInput
              onClick={this.handleClick}
            />
          </div>
          <div className="todo-item">
            {/* <TodoItem/> */}
          </div>
        </div>
      </div>
    )
  };
}

export default App;
