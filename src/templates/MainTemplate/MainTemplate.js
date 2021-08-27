import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainContainer = styled.div`
    width: 70vw;
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainTemplate = ({ children }) => {

    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}

MainTemplate.propTypes = {
    name: PropTypes.node
  };

export default MainTemplate;