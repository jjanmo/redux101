import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './style';
import Item from '../item';

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
