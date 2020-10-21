import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
    margin: 0 0.5rem;
    border-top: 3px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0 1rem 3rem;
`;

function List() {
    const fakeData = [
        {
            id: 1,
            title: 'Hello World',
            contents: 'This is todoapp used react hooks & redux',
            status: false,
            date: Date.now(),
        },
        {
            id: 2,
            title: 'Solve problem about ds&algo',
            contents: 'at Leet & CodingGame',
            status: false,
            date: Date.now(),
        },
        {
            id: 3,
            title: 'Study JavaScript',
            contents: 'Use 2018 Best Project about JavaScript 33 Concept',
            status: false,
            date: Date.now(),
        },
    ];

    return (
        <Container>
            {fakeData.map((data) => (
                <Item key={data.id} {...data} />
            ))}
        </Container>
    );
}

export default List;
