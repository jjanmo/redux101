import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Textarea = styled.textarea`
  font-size: 1.2rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;
  height: 300px;
  margin-top: 2rem;
  resize: none;
`;
export const SLink = styled(Link)`
  border-radius: 20px;
  transition: 0.4s;
  &:first-child {
    background-color: #e74c3c;
  }
  &:last-child {
    background-color: #2980b9;
  }
  &:hover {
    border-radius: 1px;
  }
`;
