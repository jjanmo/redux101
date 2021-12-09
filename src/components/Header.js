import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { parsedDate } from '../utils/date';

const Container = styled.section`
  margin: 0 0.5rem;
  padding: 2rem 2rem 1rem;
  border-bottom: 3px solid #eee;
`;
const SDate = styled.h1`
  color: #0984e3;
  font-size: 2.5rem;
`;
const Status = styled.div`
  color: #2980b9;
  padding: 1rem;
`;

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
