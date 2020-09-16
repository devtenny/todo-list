import React, { Component } from 'react';
// import './TodoList.css';
import styled from "styled-components";

import TodoInput from "./TodoInput";
import TodoItemList from "./TodoItemList";

class TodoList extends Component {
    id = 4;  // 예시 목록 4개를 추가해놓았으므로 id값이 4부터 시작
    state = {
        inputText: '',  // 할 일을 등록하기 위해 작성하는 input 값 저장할 변수
        updateText: '',  // 이미 등록한 할 일을 수정할 때 사용할 변수
        todos: [
            // checked: 완료된 항목인지 아닌지, updated: 수정 상태로 넘어간 상태인지 아닌지
            { id: 0, text: '할 일을 작성한 후 엔터를 누르거나 등록 버튼을 누르세요.', checked: false, updated: false },
            { id: 1, text: '완료한 항목은 한번 클릭하세요.', checked: true, updated: false },
            { id: 2, text: '수정하려면 두번 클릭하세요.', checked: false, updated: false },
            { id: 3, text: '삭제하려면 우측 삭제 버튼을 눌러주세요.', checked: false, updated: false },
        ]
    };
    // input 내용이 변하면(입려되면) 그 값을 inputText 변수에 저장하는 메소드
    handleChange = (e) => {
        this.setState({
            inputText: e.target.value
        })
    }
    // input에 입력된 값을 등록하기 위해 클릭하면(버튼기능) 그 값이 저장되는 메소드
    handleClick =  () => {
        const { inputText, todos } = this.state;  // state의 inputText와 todos 배열을 가져옴
        if(inputText !== '') {  // 만약 입력된 값이 공백이 아니면(공백이 추가되지 않게 하기 위한 조건문)
            this.setState({
                inputText: '',  // inputText의 값을 지우고(비우고)
                todos: todos.concat({  // concat() 함수를 활용하여 inputText로 가져온 값을 추가(merge)해줌
                    id: this.id++,  // id값을 1 증가시켜서 대입
                    text: inputText,  // inputText 값을 저장
                    checked: false,  // 기본 값은 false -> 완료된 상태가 아니므로
                    updated: false  // 기본 값은 false -> 수정 상태가 아니므로
                }),
                updateText: inputText  // updateText를 새로 추가한 할 일 텍스트로 변경 -> 수정 상태로 들어갔을 때, 아무 것도 작성하지 않고 빠져나왔을 경우 데이터가 변하지 않게 하기 위함
            })
        }
      }
      // 할 일 항목을 삭제하는 메소드
      handleDelete = (id) => {  // 매개변수로 id값을 받아옴
          const { todos } = this.state;  // state의 todos 배열을 가져옴
          this.setState({
              // filter(조건) 함수: 선택한 id값이 아닌 id값을 가진 항목들로만 구성된 newTodos라는 새로운 배열을 생성해 그 배열을 todos의 값으로 대입
              todos: todos.filter(newTodos => newTodos.id !== id)  
          });
      }
      // 할 일 항목을 완료/미완료 상태로 변경하는 메소드
      handleToggle = (id) => {  // 매개변수로 id값을 받아옴
          const { todos } = this.state;  // state의 todos 배열을 가져옴
          const selectedTodo = todos[id];  // selectedTodo(선택된 항목)이라는 변수로 해당 id값을 가진 배열의 내용을 대입
          selectedTodo.checked = !selectedTodo.checked;  // 선택된 항목의 checked(완료 상태를 갖고 있는 변수)의 값을 반대로 변경(!) 
                                                         // -> 선택된 상태이면 선택이 해제될 것이고, 선택이 안된 상태면 선택이 될 것
          todos[id] = selectedTodo  // 선택한 항목의 값을 checked 값이 변경된 selectedTodo로 변경
          this.setState({
            todos: todos  // setState() 함수 이용하여 변경된 todos 배열을 대입
          })
      }
      // 엔터키가 눌렸을 때 등록 버튼을 클릭한 것과 같은 명령이 실행되도록 하는 메소드
      handleKeyPress = (e) => {  // 매개변수로 이벤트를 받아옴
        if(e.key === 'Enter') {
            this.handleClick()
        }
      }
      // 항목을 두번 클릭하였을 때 수정모드로 넘어가는 메소드
      handleUpdate = (id) => {
          const { todos } = this.state;  // state에서 todos 배열 가져옴
          const selectedTodo = todos[id];  // 선택한 항목의 id값으로 선택 항목 selectedTodo 변수에 대입
          selectedTodo.updated = !selectedTodo.updated;  // 선택한 항목의 updated 값을 반대로 변경 -> update가 true면 수정할 수 있는 form 나오도록
          todos[id] = selectedTodo  // updated 값 변경된 항목 기존 배열에 덮어쓰기
          const text = todos[id].text  // 수정 없이 엔터를 칠 경우에도 기존 텍스트 값 유지하기 위해 해당 항목의 텍스트 값 새로운 변수에 저장
          this.setState({
            todos: todos,  // updated값이 변경된 항목을 포함하는 배열로 덮어쓰기
            updateText: text  // updateText에 기존 text값 저장해두기
          })
      }
      // 수정 input에 입력된 값이 변할 때마다 그 값을 저장하는 메소드
      handleUpdateChange = (e) => {  // 매개변수로 이벤트를 받아옴
          const text = e.target.value;  // input값에 들어오는 이벤트의 value(문자열)값을 가져옴
          this.setState({
              updateText: text  // 그 값을 updateText에 저장
            })
    }
    // 수정 input을 입력한 후에 엔터키를 누르면 저장되고, esc를 누르면 취소되는 메소드
    handleUpdateKeyPress = (e, id) => {  // 매개변수로 이벤트와 선택한 항목의 id값을 받아옴
        if(e.key === 'Enter') {  // 만약 이벤트에서의 키가 엔터였으면
            this.handleUpdateDone(id)  // 다음 메소드로 id값 갖고 가라!
        } else if(e.keyCode === 27) {  // 만약 이벤트의 키 코드가 27(esc를 눌렀을 경우)이라면
            const { todos } = this.state;  // todos 배열 가져오고
            const selectedTodo = todos[id];  // 선택한 항목 새로운 변수에 저장하고
            selectedTodo.updated = !selectedTodo.updated;  // updated 값 반대로 변경(수정 모드에서 나가기)
            todos[id] = selectedTodo  // updated 값 변경된 선택 항목 덮어쓰기
            this.setState({
                todos: todos,  // todos에 변경된 배열로 덮어쓰기
                updateText: ''  // 입력한 updateText 내용 비워두기(취소)
              })
        }
      }
      // 수정 모드에서 입력을 완료하여 엔터키를 눌렀을 때 수정사항이 저장되는 메소드
      handleUpdateDone = (id) => {  // 매개변수로 id값 받아옴
        const { todos, updateText } = this.state;  // state에서 todos 배열과 updateText(수정 input에 입력된 값) 가져옴
        const selectedTodo = todos[id];  // 선택 항목 새로운 변수에 저장
        selectedTodo.updated = !selectedTodo.updated;  // 선택 항목의 updated값 반대로 변경(수정 모드 끝내기)
        selectedTodo.text = updateText;  // 입력된 updateText의 값을 선택 항목의 text값으로 저장
        todos[id] = selectedTodo // 변경 사항 배열에 덮어쓰기
        this.setState({
          todos: todos,  // 변경된 todos 배열 덮어쓰기
          updateText: ''  // updateText 내용 비우기
        })
    }
    // 오늘 날짜 알아내는 메소드
    getDate = () => {
        let today = new Date();  // 오늘의 데이터 받아와서
        let year = today.getFullYear();  // 년도 추출
        let month = today.getMonth() + 1;  // 월 추출(0부터 시작하므로 1 더해줌)
        let date = today.getDate();  // 일 추출
        let day = today.getDay();  // 요일 추출
        const week = ['일', '월', '화', '수', '목', '금', '토'];  // 요일의 경우 숫자로 값이 나오기 때문에 요일을 적은 배열 생성하여 인덱스로 접근
        return `${year}년 ${month}월 ${date}일 ${week[day]}요일`  // 메소드 호출 시 다음과 같은 문자열을 리턴하도록
    }

    render() {
        const { inputText, todos } = this.state;
        return(
        <TodoListDiv>
            <TodoDateTimeP>{ this.getDate() }</TodoDateTimeP>
            <TodoTitleH3>오늘의 할 일</TodoTitleH3>
                <TodoInput
                    inputText={ inputText }
                    onChange={ this.handleChange }
                    onClick={ this.handleClick }
                    onKeyPress={ this.handleKeyPress }/>
                <TodoItemList 
                    todos={ todos }
                    onDelete={ this.handleDelete }
                    onToggle={ this.handleToggle }
                    onUpdate={ this.handleUpdate }
                    onUpdateChange={ this.handleUpdateChange }
                    onKeyPress={ this.handleUpdateKeyPress }
                />
        </TodoListDiv>
    )
  };
}

const TodoListDiv = styled.div`
  margin: 30px;
`;

const TodoTitleH3 = styled.h3`
  border-bottom: 1px solid grey;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 0px;
  font-size: 40px;
  font-family: 'Nanum Myeongjo', serif;
`;

const TodoDateTimeP = styled.p`
    text-align: right;
`

export default TodoList;