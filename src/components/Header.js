import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    margin: 0 0.5rem;
    padding: 2rem 2rem 1rem;
    border-bottom: 3px solid #eee;
`;
const Date = styled.h1`
    color: #0984e3;
`;
const Status = styled.div`
    color: #74b9ff;
    padding: 1rem;
`;

function Header() {
    return (
        <Container>
            <Date>2020년 10월 20일 화요일</Date>
            <Status>Completed 3 | Totel 5</Status>
        </Container>
    );
}

export default Header;
