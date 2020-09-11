import React, { Component } from 'react';
import './TodoInput.css';

// const TodoInput = ({ text, onClick, onChange })

class TodoInput extends Component {
    render() {
        const { inputText, onChange, onClick, onKeyPress } = this.props;
        return(
            <div className="input-form">
                <input
                    value={ inputText }
                    type="text"
                    className="input-text"
                    placeholder="오늘 할 일을 입력하세요."
                    onChange={ onChange }
                    onKeyPress={ onKeyPress }>
                </input>
                <span 
                    className="input-btn"
                    onClick={ onClick }><i class="fas fa-check"></i></span>
            </div>
        )
    }
}
export default TodoInput;