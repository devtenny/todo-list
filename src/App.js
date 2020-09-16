import React, { Component } from 'react';
import './App.css';
import styled from "styled-components";

import TodoList from "./component/TodoList";
// import StyledComponentTest from './component/StyledComponentTest';

class App extends Component {

  render() {
    return(
      // 투두리스트 컴포넌트(TodoList.js)
      <TodoListZone>
        <TodoList />
      </TodoListZone>
      // <StyledComponentTest/>
    )
  };
}

const TodoListZone = styled.div`
  width: 520px;
  height: 770px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export default App;