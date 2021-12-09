import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as todoActions from '../reducers/todos';

const Todo = styled.li`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem;
  transition: 0.3s;
  &:hover {
    background-color: #eee;
  }
`;
const SLink = styled(Link)`
  width: 80%;
  display: inline-block;
`;
const Title = styled.span`
  margin: 0 0.2rem;
  padding: 0.3rem;
  font-size: 1.2rem;
  text-decoration: ${(props) => (props.status ? 'line-through' : 'none')};
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 10%;
  text-align: center;
  text-transform: uppercase;
  padding: 0.2rem 0;
  border-radius: 5px;
  color: #fff;
  background-color: #27ae60;
`;

function Item({ id, title, isDone }) {
  console.log(id, 'iteme');
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
