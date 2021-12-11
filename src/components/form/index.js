import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Input, Button, Textarea } from './style';
import * as todosActions from '../../reducers/todos';

function Form() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });

  const { title, description } = todo;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    dispatch(todosActions.addTodo(todo));
    setTodo({
      title: '',
      description: '',
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input type="text" name="title" onChange={onChange} value={title} autoFocus />
        <Button>Add</Button>
        <Textarea name="description" rows="5" onChange={onChange} value={description} />
      </form>
    </Container>
  );
}

export default Form;
