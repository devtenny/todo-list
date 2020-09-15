import React, { Component } from 'react';
// import './TodoInput.css';
import styled from "styled-components";

// const TodoInput = ({ text, onClick, onChange })

class TodoInput extends Component {
    render() {
        const { inputText, onChange, onClick, onKeyPress } = this.props;
        return(
            <TodoInputDiv>
                <InputText
                    value={ inputText }
                    type="text"
                    className="input-text"
                    placeholder="오늘 할 일을 입력하세요."
                    onChange={ onChange }
                    // onKeyPress={ (e) => onKeyPress(e) }>
                    onKeyPress={ onKeyPress }>
                </InputText>
                <InputBtn 
                    className="input-btn"
                    onClick={ onClick }><i className="fas fa-check"></i></InputBtn>
            </TodoInputDiv>
        )
    }
}

const TodoInputDiv = styled.div`
    padding: 20px;
    border-bottom: 1px solid grey;
`

const InputText = styled.input`
    background: 0%;
    border: none;
    width: 90%;
    font-size: 15px;
    outline: none;
`

const InputBtn = styled.span`
    float: right;
    cursor: pointer;
`

export default TodoInput;