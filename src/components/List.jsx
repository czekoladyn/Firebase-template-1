import React from 'react';
import Card from './Card';
import './List.css';

function List({ title }) {
    return (
        <div className="list">
            <h3>{title}</h3>
            <Card text="Sample Task 1" />
            <Card text="Sample Task 2" />
        </div>
    );
}

export default List;