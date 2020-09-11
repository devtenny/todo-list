import React, { Component } from 'react';
import './TodoList.css';

import TodoInput from "./TodoInput";
import TodoItemList from "./TodoItemList";

class TodoList extends Component {
    id = 4;
    state = {
        inputText: '',
        updateText: '',
        todos: [
        { id: 0, text: '할 일을 작성한 후 엔터를 누르거나 등록 버튼을 누르세요.', checked: false, updated: false },
        { id: 1, text: '완료한 항목은 한번 클릭하세요.', checked: true, updated: false },
        { id: 2, text: '수정하려면 두번 클릭하세요.', checked: false, updated: false },
        { id: 3, text: '삭제하려면 우측 삭제 버튼을 눌러주세요.', checked: false, updated: false },
        ]
    };

    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }

    handleClick =  () => {
        const { inputText, todos } = this.state;
        if(inputText !== '') {
            this.setState({
                inputText: '',
                todos: todos.concat({
                    id: this.id++,
                    text: inputText,
                    checked: false,
                    updated: false
                }),
                updateText: inputText
            })
        }
      }

      handleDelete = (id) => {
          const { todos } = this.state;
          this.setState({
              todos: todos.filter(todo => todo.id !== id)  // todo라는 새로운 배열 생성
          });
      }

      handleToggle = (id) => {
          const { todos } = this.state;
          const selectedTodo = todos[id];
          selectedTodo.checked = !selectedTodo.checked;
          todos[id] = selectedTodo
          this.setState({
            todos: todos
          })
      }

      handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick()
        }
      }

      handleUpdate = (id) => {
          const { todos } = this.state;
          const selectedTodo = todos[id];
          selectedTodo.updated = !selectedTodo.updated;
          todos[id] = selectedTodo
          const text = todos[id].text
          this.setState({
            todos: todos,
            updateText: text
          })
      }

      handleUpdateDone = (id) => {
        const { todos, updateText } = this.state;
        const selectedTodo = todos[id];
        selectedTodo.updated = !selectedTodo.updated;
        selectedTodo.text = updateText;
        todos[id] = selectedTodo
        this.setState({
          todos: todos,
          updateText: ''
        })
    }

      handleUpdateChange = (e) => {
          const text = e.target.value;
          this.setState({
              updateText: text
            })
    }

    handleUpdateKeyPress = (e, id) => {
        if(e.key === 'Enter') {
            this.handleUpdateDone(id)
        }
      }

    render() {
        const { inputText, todos } = this.state;
        return(
        <div className="todo-list">
            <div className="todo-title">
                <h3>오늘 할 일</h3>
            </div>
            <div className="todo-input">
                <TodoInput
                    inputText={ inputText }
                    onChange={ this.handleChange }
                    onClick={ this.handleClick }
                    onKeyPress={ this.handleKeyPress }/>
            </div>
                <TodoItemList 
                    todos={ todos }
                    onDelete={ this.handleDelete }
                    onToggle={ this.handleToggle }
                    onUpdate={ this.handleUpdate }
                    onUpdateChange={ this.handleUpdateChange }
                    onKeyPress={ this.handleUpdateKeyPress }
                />
        </div>
    )
  };
}
export default TodoList;
