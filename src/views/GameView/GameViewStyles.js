import styled, { css } from 'styled-components';

const halfSize = css`
    width: ${props => props.imgSize.width/2 +'px'};
    height: ${props => props.imgSize.height/2 +'px'};
`;

const fullWidth = css`
    width: ${props => props.imgSize.width +'px'}
`;

const fullHeight = css`
    height: ${props => props.imgSize.height +'px'};
`;

const bgImage = css`
    background-image: url('${props => props.animalData.image}');
`;

const bgPosition_1 = css`
    background-position: right ${props => props.imgSize.width/2 +'px'} bottom ${props => props.imgSize.height/2 +'px'};
`;

const bgPosition_2 = css`
    background-position: right ${props => props.imgSize.width +'px'} bottom ${props => props.imgSize.height/2 +'px'};
`;

const bgPosition_3 = css`
    background-position: right ${props => props.imgSize.width/2 +'px'} bottom ${props => props.imgSize.height +'px'};
`;
const bgPosition_4 = css`
    background-position: right ${props => props.imgSize.width +'px'} bottom ${props => props.imgSize.height +'px'};
`;

const Puzzle = styled.div`
    ${halfSize}
    ${bgImage};
`;

export const Piece1 = styled(Puzzle)`
    ${bgPosition_1}
`;
export const Piece2 = styled(Puzzle)`
    ${bgPosition_2}
`;
export const Piece3 = styled(Puzzle)`
    ${bgPosition_3}
`;
export const Piece4 = styled(Puzzle)`
    ${bgPosition_4}
`;

export const PiecesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const DropZone = styled(PiecesContainer)`
    ${fullWidth};
    ${fullHeight};
`;

export const DropField = styled.div`
    ${halfSize}
    ${bgImage}
    opacity: 0.5;

    &:first-child {
        ${bgPosition_1}
    }
    &:nth-child(2) {
        ${bgPosition_2}
    }
    &:nth-child(3) {
        ${bgPosition_3}
    }
    &:last-child {
        ${bgPosition_4}
    }
`;

export const PuzzleBoard = styled.div`
    display: flex;
    gap: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;