import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  width: 45vw;
  min-height: 80vh;
  margin: 3rem auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.h1`
  margin: 0.5rem 0;
  font-size: 2rem;
  width: 100%;
`;
export const Row = styled.div`
  background-color: rgba(129, 236, 236, 0.2);
  color: #34495e;
  padding: 0.3rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Contents = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  padding: 1rem;
  border-top: 3px solid #eee;
  white-space: pre;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

export const Button = styled.button`
  width: 200px;
  outline: none;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  text-align: center;
  padding: 0.4rem 1.2rem;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
`;

export const SLink = styled(Link)`
  border-radius: 20px;
  transition: 0.4s;
  &:first-child {
    background-color: #2980b9;
  }
  &:last-child {
    background-color: #00b894;
  }
  &:hover {
    border-radius: 1px;
  }
`;
