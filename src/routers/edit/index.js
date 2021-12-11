import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as todosActions from '../../reducers/todos';
import { parsedDate } from '../../utils/date';
import { Container, Row, ButtonContainer, Button } from '../detail/style';
import { Input, SLink, Textarea } from './style';

function Edit(props) {
  const dispatch = useDispatch();
  const todoObj = props.location.state;
  const [todo, setTodo] = useState({ title: todoObj.title, description: todoObj.description });
  const { title, description } = todo;

  const onChange = (e) => {
    const { value, name } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onClickSave = () => {
    dispatch(
      todosActions.editTodo({
        id: todoObj.id,
        ...todo,
      })
    );
  };
  return (
    <Container>
      <Input type="text" name="title" onChange={onChange} value={title} autoFocus />
      <Row>
        <span>{todoObj.isDone ? 'Completed 👍' : 'Progressing 🏃'}</span>
        {todoObj.date && <span>{parsedDate(todoObj.date)}</span>}
      </Row>
      <Textarea name="description" rows="5" onChange={onChange} value={description} />
      <ButtonContainer>
        <SLink to="/">
          <Button>cancel</Button>
        </SLink>
        <SLink to="/">
          <Button onClick={onClickSave}>save</Button>
        </SLink>
      </ButtonContainer>
    </Container>
  );
}

export default Edit;
