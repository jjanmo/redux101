import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { actionCreator } from '../store';

const Todo = styled.li`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 0.5rem;
    transition: 0.3s;
    &:hover {
        background-color: #eee;
    }
`;
const SLink = styled(Link)`
    width: 80%;
    display: inline-block;
`;
const Title = styled.span`
    margin: 0 0.2rem;
    padding: 0.3rem;
    font-size: 1.2rem;
    text-decoration: ${(props) => (props.status ? 'line-through' : 'none')};
`;
const Button = styled.button`
    all: unset;
    cursor: pointer;
    width: 10%;
    text-align: center;
    text-transform: uppercase;
    padding: 0.2rem 0;
    border-radius: 5px;
    color: #fff;
    background-color: #27ae60;
`;

function Item({ dispatchEditStatus, dispatchDeleteTodo, ...rest }) {
    const [status, setStatus] = useState(false);

    const onChange = (e) => {
        const { target } = e;
        setStatus(target.checked);
        dispatchEditStatus();
    };

    return (
        <Todo>
            <input type="checkbox" name="checkbox" onChange={onChange} checked={rest.status} />
            <SLink to={`/${rest.id}`}>
                <Title status={status}>{rest.todo.title}</Title>
            </SLink>
            <Button onClick={dispatchDeleteTodo}>Del</Button>
        </Todo>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispatchDeleteTodo: () => dispatch(actionCreator.deleteTodo(ownProps.id)),
        dispatchEditStatus: () => dispatch(actionCreator.editStatus(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(Item);
