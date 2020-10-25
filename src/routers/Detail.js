import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    background-color: transparent;
    text-transform: uppercase;
    text-align: center;
    padding: 0.4rem 1.2rem;
    cursor: pointer;
    font-size: 1.1rem;
    color: #fff;
`;

const SLink = styled(Link)`
    border-radius: 20px;
    transition: 0.4s;
    &:first-child {
        background-color: #16a085;
    }
    &:last-child {
        background-color: #2980b9;
    }
    &:hover {
        border-radius: 1px;
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
                <SLink to={`/edit/${todoObj.id}`}>
                    <Button>edit</Button>
                </SLink>
                <SLink to="/">
                    <Button>back</Button>
                </SLink>
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
