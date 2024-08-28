import React from 'react';
import List from './List';
import './Board.css';

function Board() {
    return (
        <div className="board">
            <List title="To Do" />
            <List title="In Progress" />
            <List title="Done" />
        </div>
    );
}

export default Board;