import React, { Component } from 'react';
import './TodoInput.css';

class TodoInput extends Component {
    render() {
        const { text, onClick } = this.props;
        return(
            <div>
                <form className="input-form">
                    <input
                        value={ text }
                        type="text"
                        className="input-text"
                        placeholder="오늘 할 일을 입력하세요.">
                    </input>
                    <span 
                        className="input-btn"
                        onClick={ onClick }>등록</span>
                </form>
            </div>
        )
    }
}
export default TodoInput;