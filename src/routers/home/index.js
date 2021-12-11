import React from 'react';
import Form from '../../components/form';
import Header from '../../components/header';
import List from '../../components/list';
import { Container } from './style';

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
