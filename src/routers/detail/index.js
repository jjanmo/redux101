import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { parsedDate } from '../../utils/date';
import { Container, Title, Row, Contents, ButtonContainer, Button, SLink } from './style';

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
        <span>{todo.isDone ? 'Completed 👍' : 'Progressing 🏃'}</span>
        {todo.date && <span>{parsedDate(todo.date)}</span>}
      </Row>
      <Contents>{todo.description}</Contents>
      <ButtonContainer>
        <SLink to="/">
          <Button>back</Button>
        </SLink>
        <SLink
          to={{
            pathname: '/edit',
            state: todo,
          }}
        >
          <Button>edit</Button>
        </SLink>
      </ButtonContainer>
    </Container>
  );
}

export default Detail;
