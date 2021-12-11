import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { parsedDate } from '../../utils/date';
import { Container, Title, Row, ButtonContainer, Button } from '../detail/style';
import { SLink, Textarea } from './style';

function Edit(props) {
  const todo = props.location.state;
  const [description, setDescription] = useState(todo.description);

  const onChange = (e) => {
    const _description = e.target.value;
    setDescription(_description);
  };

  return (
    <Container>
      <Title>{todo.title}</Title>
      <Row>
        <span>{todo.isDone ? 'Completed 👍' : 'Progressing 🏃'}</span>
        {todo.date && <span>{parsedDate(todo.date)}</span>}
      </Row>
      <Textarea name="description" rows="5" onChange={onChange} value={description} />
      <ButtonContainer>
        <SLink to="/">
          <Button>cancel</Button>
        </SLink>
        <SLink to="/">
          <Button>save</Button>
        </SLink>
      </ButtonContainer>
    </Container>
  );
}

export default Edit;
