import React, { Component } from 'react';
// import './TodoItemList.css';
import styled from "styled-components";

class TodoItemList extends Component {
    render() {
        const { todos, onDelete, onToggle, onUpdate, onUpdateChange, onUpdateClick, onKeyPress, updateText } = this.props;
        const todoItemList = todos.map(  // foreach는 리턴값이 없음
            // onClick에서 함수 호출이 아닌 함수 정의를 권장
            ({ id, text, checked, updated }) => (
                <TodoItemListDiv key={ id }>
                    <TodoItemDiv 
                        className="todo-item"
                        id={ checked ? "checked" : "" }
                        onClick={ () => onToggle(id) }
                        onDoubleClick={ () => onUpdate(id) }>
                        { text }
                        <DeleteBtn 
                            className="deleteBtn" 
                            key={ id }
                            onClick={ (e) => {e.stopPropagation(); onDelete(id)} }><i className="fas fa-trash-alt"></i></DeleteBtn>
                    </TodoItemDiv>
                    <UpdatedInput
                    className={ updated ? "updated" : "not-updated"}
                    type="text"
                    value={ updated ? updateText : "" }
                    placeholder="수정할 내용을 입력하고 엔터를 누르세요. 취소하려면 esc를 누르세요."
                    onClick={ onUpdateClick }
                    onChange={ (e) => onUpdateChange(e) }
                    onKeyUp={ (e) => onKeyPress(e, id) }></UpdatedInput>
                </TodoItemListDiv>
            )
        );
        return(
            <TodoItemListTempDiv>
                { todoItemList }
            </TodoItemListTempDiv>
        )
    }
}

const TodoItemListDiv = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: lightgrey;
    }
`

const TodoItemDiv = styled.div`
    padding: 0px;
    text-decoration: ${props => (props.id === "checked" ? "line-through" : "none")};
`

const UpdatedInput = styled.input`
    display: ${props => (props.className === "updated" ? "inline" : "none")};
    border: none;
    width: 100%;
    background: 0%;
    border-bottom: 1px solid grey;
    outline: none;
`

const DeleteBtn = styled.span`
    float: right;
    color: white;
    &:hover {
        color: black;
    }
`
const TodoItemListTempDiv = styled.div`
    margin-top: 10px;
`
export default TodoItemList;