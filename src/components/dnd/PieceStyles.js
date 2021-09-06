import styled, { css } from 'styled-components';

const getPositionWidth = (props) => {
    if(props.piece.bg.right === "half-w") {
        return props.imgSize.width/2;
    } else if (props.piece.bg.right === "full-w") {
        return props.imgSize.width;   
    }
};

const getPositionHeight = (props) => {
    if(props.piece.bg.bottom === "half-h") {
        return props.imgSize.height/2;
    } else if (props.piece.bg.bottom === "full-h") {
        return props.imgSize.height
    }
};

const halfSize = css`
    width: ${props => props.imgSize.width/2 +'px'};
    height: ${props => props.imgSize.height/2 +'px'};
`;

const bgImage = css`
    background-image: url('${props => props.animalData.image}');
`;

export const StyledPiece = styled.div`
    ${halfSize}
    ${bgImage}
    background-position: right ${props => getPositionWidth(props) + 'px'} bottom ${props => getPositionHeight(props) + 'px'}; 
`;

export const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    background-color: white;
`;