import React from 'react';
import { Todo, SLink, Title, Button } from './style';
import * as todoActions from '../../reducers/todos';

function Item({ id, title, isDone }) {
  const onChange = () => {};

  const onClick = () => {};

  return (
    <Todo>
      <input type="checkbox" name="checkbox" onChange={onChange} checked={isDone} />
      <SLink to={`/${id}`}>
        <Title isDone={isDone}>{title}</Title>
      </SLink>
      <Button onClick={onClick}>Del</Button>
    </Todo>
  );
}

export default Item;
