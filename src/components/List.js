import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.ul`
  margin: 0 0.5rem;
  border-top: 3px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 3rem;
`;

function List() {
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      {todos.map((todo) => (
        <Item key={todo.id} {...todo} />
      ))}
    </Container>
  );
}

export default List;
