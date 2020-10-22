import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actionCreator } from '../store';

const Todo = styled.li`
    display: flex;
    margin: 0.5rem 0;
`;

function Item({ dispatchDeleteTodo, ...rest }) {
    return (
        <Todo>
            <input type="checkbox" name="checkbox" />
            <div>{rest.todo.title}</div>
            <button onClick={dispatchDeleteTodo}>Del</button>
        </Todo>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatchDeleteTodo: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(Item);
