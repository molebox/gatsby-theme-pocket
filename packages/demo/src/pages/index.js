import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`;

const Index = () => (
    <Container>
        <h1>Take me to the articles!!</h1>
        <Link to="/articleIndex">The Articles</Link>
    </Container>
);

export default Index;