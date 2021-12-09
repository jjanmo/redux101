import React from 'react';
import styled from 'styled-components';
import Form from '../components/form';
import Header from '../components/header';
import List from '../components/list';

const Container = styled.section`
  width: 45vw;
  min-height: 80vh;
  margin: 3rem auto;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
`;

function Home(props) {
  return (
    <Container>
      <Header />
      <Form {...props} />
      <List />
    </Container>
  );
}

export default Home;
