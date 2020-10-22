import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.section`
    width: 45vw;
    min-height: 80vh;
    margin: 3rem auto;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    padding: 3rem;
`;
const Title = styled.h1``;
const Status = styled.div``;
const Contents = styled.div``;
const Date = styled.div``;

function Detail({ todoObj }) {
    return (
        <Container>
            <Title>{todoObj?.todo.title}</Title>
            <Status>{todoObj?.status ? 'Completed 👍' : 'Progressing 🙏'}</Status>
            <Contents>{todoObj?.todo.contents}</Contents>
            <Date>{todoObj?.date}</Date>
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
