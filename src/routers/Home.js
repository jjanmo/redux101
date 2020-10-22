import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form';
import Header from '../components/Header';
import List from '../components/List';

const Container = styled.div`
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
