import React from 'react';
import { useSelector } from 'react-redux';
import { Container, SDate, Status } from './style';
import { parsedDate } from '../../utils/date';

function Header() {
  const todos = useSelector((state) => state.todos);

  return (
    <Container>
      <SDate>
        <span>{parsedDate(new Date())}</span>
      </SDate>
      <Status>{`Completed ${todos.filter((todo) => todo.isDone).length} | Total ${todos.length}`}</Status>
    </Container>
  );
}

export default Header;
