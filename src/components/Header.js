import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ParsedDate from '../components/ParsedDate';

const Container = styled.section`
    margin: 0 0.5rem;
    padding: 2rem 2rem 1rem;
    border-bottom: 3px solid #eee;
`;
const SDate = styled.h1`
    color: #0984e3;
    font-size: 2.5rem;
`;
const Status = styled.div`
    color: #74b9ff;
    padding: 1rem;
`;

function Header({ todos }) {
    const [completed, setCompleted] = useState(todos.filter((todo) => todo.status).length);

    useEffect(() => {
        setCompleted(todos.filter((todo) => todo.status).length);
    }, [todos]);

    return (
        <Container>
            <SDate>
                <ParsedDate rawDate={new Date().toString()} />
            </SDate>
            <Status>{`Completed ${completed} | Total ${todos.length}`}</Status>
        </Container>
    );
}

function mapStateToProps(state) {
    return { todos: state };
}

export default connect(mapStateToProps)(Header);
