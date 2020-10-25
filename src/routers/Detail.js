import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ParsedDate from '../components/ParsedDate';

const Container = styled.section`
    width: 45vw;
    min-height: 80vh;
    margin: 3rem auto;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    padding: 5rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
`;
const Title = styled.h1`
    margin: 0.5rem 0;
    font-size: 2rem;
    width: 100%;
`;
const Row = styled.div`
    background-color: rgba(129, 236, 236, 0.2);
    color: #34495e;
    text-align: right;
    padding: 0.3rem 1rem;
    width: 100%;
`;
const Contents = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
    padding: 1rem;
    border-top: 3px solid #eee;
`;

const Buttons = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    width: 70%;
`;

const Button = styled.button`
    outline: none;
    border: none;
    text-transform: uppercase;
    border-radius: 20px;
    text-align: center;
    padding: 0.4rem 1.2rem;
    cursor: pointer;
    font-size: 1.1rem;
    transition: 0.4s;
    &:hover {
        border-radius: 1px;
    }
    &:first-child {
        color: #fff;
        background-color: #16a085;
    }
    &:nth-child(2) {
        color: #fff;
        background-color: #27ae60;
    }
    &:last-child {
        color: #fff;
        background-color: #2980b9;
    }
`;

function Detail({ todoObj }) {
    return (
        <Container>
            <Title>{todoObj?.todo.title}</Title>
            <Row>
                <span>
                    {todoObj ? (todoObj.status ? 'Completed 👍 | ' : 'Progressing 🙏 | ') : ''}
                </span>
                {todoObj && <ParsedDate rawDate={todoObj.date} />}
            </Row>
            <Contents>{todoObj?.todo.contents}</Contents>
            <Buttons>
                <Button>edit</Button>
                <Button>del</Button>
                <Button>back</Button>
            </Buttons>
        </Container>
    );
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id },
        },
    } = ownProps;

    return {
        todoObj: state.find((todo) => todo.id === parseInt(id)),
    };
}

export default connect(mapStateToProps)(Detail);
