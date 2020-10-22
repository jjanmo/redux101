import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
    margin: 0 0.5rem;
    border-top: 3px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0 1rem 3rem;
`;

function List({ todos }) {
    return (
        <Container>
            {todos.map((todo) => (
                <Item key={todo.id} {...todo} />
            ))}
        </Container>
    );
}
function mapStateToProps(state) {
    return { todos: state };
}

export default connect(mapStateToProps)(List);
