import React from 'react';
import { useDispatch } from 'react-redux';
import * as todoActions from '../../reducers/todos';
import { Todo, SLink, Title, Button, Checkbox } from './style';

function Item({ id, title, isDone }) {
  const dispatch = useDispatch();
  const onChange = () => {
    dispatch(todoActions.editStatus(Number(id)));
  };

  const onClick = () => {};

  return (
    <Todo>
      <Checkbox type="checkbox" name="checkbox" onChange={onChange} checked={isDone} />
      <SLink to={`/${id}`}>
        <Title isDone={isDone}>{title}</Title>
      </SLink>
      <Button onClick={onClick}>Del</Button>
    </Todo>
  );
}

export default Item;
