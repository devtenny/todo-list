import React, { Component } from 'react';
import './TodoItemList.css';

class TodoItemList extends Component {
    render() {
        const { todos, onDelete, onToggle, onUpdate, onUpdateChange, onUpdateClick, onKeyPress, updateText } = this.props;
        const todoItemList = todos.map(  // foreach는 리턴값이 없음
            // onClick에서 함수 호출이 아닌 함수 정의를 권장
            ({ id, text, checked, updated }) => (
                <div key={ id }>
                    <div 
                        className="todo-item"
                        id={ checked ? "checked" : "" }
                        onClick={ () => onToggle(id) }
                        onDoubleClick={ () => onUpdate(id) }>
                        { text }
                        <span 
                            className="deleteBtn" 
                            key={ id }
                            onClick={ (e) => {e.stopPropagation(); onDelete(id)} }><i class="fas fa-trash-alt"></i></span>
                    </div>
                    <input
                    className={ updated ? "updated" : "not-updated" }
                    type="text"
                    placeholder="→ 수정할 내용을 입력하고 엔터를 누르세요."
                    value={ updateText }
                    onClick={ onUpdateClick }
                    onChange={ (e) => onUpdateChange(e) }
                    onKeyPress={ (e) => onKeyPress(e, id) }></input>
                </div>
            )
        );
        return(
            <div className="todo-item-list">
                { todoItemList }
            </div>
        )
    }
}
export default TodoItemList;