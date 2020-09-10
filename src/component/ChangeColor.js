import React, { Component } from 'react';

class ChangeColor extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <div className="listTemplate">
                <div>
                    색 바꾸기
                    <button onClick={ onClick }>얍</button>
                </div>
            </div>
        )
    }
}
export default ChangeColor;