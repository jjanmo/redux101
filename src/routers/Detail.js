import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { parsedDate } from '../utils/date';

const Container = styled.section`
  width: 45vw;
  min-height: 80vh;
  margin: 3rem auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  padding: 5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`;
const Title = styled.h1`
  margin: 0.5rem 0;
  font-size: 2rem;
  width: 100%;
`;
const Row = styled.div`
  background-color: rgba(129, 236, 236, 0.2);
  color: #34495e;
  padding: 0.3rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Contents = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 3px solid #eee;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  text-align: center;
  padding: 0.4rem 1.2rem;
  cursor: pointer;
  font-size: 1.1rem;
  color: #fff;
`;

const SLink = styled(Link)`
  border-radius: 20px;
  transition: 0.4s;
  &:first-child {
    background-color: #2980b9;
  }
  &:hover {
    border-radius: 1px;
  }
`;

function Detail(props) {
  const todos = useSelector((state) => state.todos);
  const id = useRef(Number(props.match.params.id));
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const _todo = todos.filter((todo) => todo.id === id.current)[0];
    setTodo(_todo);
  }, [todos]);

  return (
    <Container>
      <Title>{todo.title}</Title>
      <Row>
        <span>{todo.idDone ? 'Completed 👍 | ' : 'Progressing 🏃'}</span>
        {todo.date && <span>{parsedDate(todo.date)}</span>}
      </Row>
      <Contents>{todo.description}</Contents>
      <Buttons>
        <SLink to="/">
          <Button>back</Button>
        </SLink>
      </Buttons>
    </Container>
  );
}

export default Detail;
