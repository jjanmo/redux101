import React, { useState } from 'react';
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

function Home() {
    const [todo, setTodo] = useState({
        title: '',
        detail: '',
    });

    const { title, detail } = todo;

    const onSubmit = (e) => {
        e.preventDefault();
        // setTodo('');
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        });
        console.log(todo);
    };

    return (
        <Container>
            <Header />
            <Form />
            <List />
        </Container>
    );
}

export default Home;
