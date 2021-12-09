import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Todo = styled.li`
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
export const SLink = styled(Link)`
  width: 80%;
  display: inline-block;
`;
export const Button = styled.button`
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
export const Title = styled.span.attrs((props) => ({
  textDecoration: props.status ? 'line-through' : 'none',
}))`
  margin: 0 0.2rem;
  padding: 0.3rem;
  font-size: 1.2rem;
`;
