import React from 'react';
import { useDispatch } from 'react-redux';
import * as todosActions from '../../reducers/todos';
import { Todo, SLink, Title, Button, Checkbox } from './style';

function Item({ id, title, isDone }) {
  const dispatch = useDispatch();
  const onChangeStatus = () => {
    dispatch(todosActions.editStatus(Number(id)));
  };

  const onClickDelete = () => {
    dispatch(todosActions.deleteTodo(Number(id)));
  };

  return (
    <Todo>
      <Checkbox type="checkbox" name="checkbox" onChange={onChangeStatus} checked={isDone} />
      <SLink to={`/${id}`}>
        <Title isDone={isDone}>{title}</Title>
      </SLink>
      <Button onClick={onClickDelete}>Del</Button>
    </Todo>
  );
}

export default Item;
