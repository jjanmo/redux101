import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    margin: 1em auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 80%;
`;
const Input = styled.input`
    width: 60%;
    margin: 1rem 0;
    font-size: 1.2rem;
    outline: none;
    padding: 0.2rem 0.5rem;
`;
const Textarea = styled.textarea`
    font-size: 1.2rem;
    outline: none;
    padding: 0.5rem;
    width: 100%;
`;
const Button = styled.button`
    all: unset;
    width: 20%;
    height: 2em;
    margin: 1rem 0.5rem;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
    background-color: #0984e3;
    transition: 0.2s;

    &:active {
        transform: scale(1.09);
    }
`;

function Form() {
    return (
        <Container>
            <form>
                <Input type="text" name="title" autoFocus />
                <Button>Add</Button>
                <Textarea rows="5" />
            </form>
        </Container>
    );
}

export default Form;
