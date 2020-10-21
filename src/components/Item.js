import React from 'react';
import styled from 'styled-components';

const Todo = styled.li`
    display: flex;
    margin: 0.5rem 0;
`;

function Item({ title, contents, status, date }) {
    return (
        <Todo>
            <input type="checkbox" name="checkbox" />
            <div>{title}</div>
            <button>Del</button>
        </Todo>
    );
}

export default Item;
