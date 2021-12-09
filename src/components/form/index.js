import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Input, Button, Textarea } from './style';
import * as todoActions from '../../reducers/todos';

function Form({ todos, dispatchAddTodo }) {
  const [todo, setTodo] = useState({
    title: '',
    contents: '',
  });

  const { title, contents } = todo;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatchAddTodo(todo);
    setTodo({
      title: '',
      contents: '',
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
        <Textarea name="contents" rows="5" onChange={onChange} value={contents} />
      </form>
    </Container>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchAddTodo: (todo) => dispatch(todoActions.addTodo(todo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
