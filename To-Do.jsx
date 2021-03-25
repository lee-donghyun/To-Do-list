import React, { useState } from 'react';
import { Tasks } from './Tasks';

const ToDo = () => {

    const [list, setList] = useState([]);

    const onClickButton = (e) => {
        e.preventDefault();
        console.log('generate new task');
        setList((prevList) => {
            return [...prevList, ''];
        });
    }

    return (
        <div id='Today'>
            <h1>오늘</h1>
            <Tasks list={list} />
            <button onClick={onClickButton}>새로운 미리 알림</button>
        </div>
    );
}

export { ToDo };