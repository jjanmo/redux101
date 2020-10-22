import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { actionCreator } from '../store';

const Todo = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0.5rem 0;
`;
const SLink = styled(Link)`
    width: 100%;
    display: inline-block;
`;

function Item({ dispatchDeleteTodo, ...rest }) {
    return (
        <>
            <Todo>
                <SLink to={`/${rest.id}`}>
                    <div>
                        <input type="checkbox" name="checkbox" />
                        <span>{rest.todo.title}</span>
                    </div>
                </SLink>
            </Todo>
            <button onClick={dispatchDeleteTodo}>Del</button>
        </>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatchDeleteTodo: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(Item);
