import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actionCreator } from '../store';

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

function Form({ todos, dispatchAddTodo }) {
    const [todo, setTodo] = useState({
        title: '',
        contents: '',
    });

    const { title, contents } = todo;

    const onSubmit = (e) => {
        e.preventDefault();
        dispatchAddTodo(todo);
        setTodo({
            title: '',
            contents: '',
        });
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setTodo({
            ...todo,
            [name]: value,
        });
    };

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <Input type="text" name="title" onChange={onChange} value={title} autoFocus />
                <Button>Add</Button>
                <Textarea name="contents" rows="5" onChange={onChange} value={contents} />
            </form>
        </Container>
    );
}

function mapStateToProps(state) {
    return { todos: state };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddTodo: (todo) => dispatch(actionCreator.addTodo(todo)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
