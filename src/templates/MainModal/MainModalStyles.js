import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

export const ContentWrapper = styled.div`
    margin: 0 20px 0 20px;
    height: 300px;
    width: 300px;
`;

export const ImageWrapper = styled(ContentWrapper)`
  background-image: url('${props => props.animalData.image}');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoadingWrapper = styled(ContentWrapper)`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Error = styled(LoadingWrapper)`
  background-color: pink;
`;

export const ModalContainer = styled.div`
  min-width: 400px;
  min-height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border:1px solid red;
  opacity: 1;
  background-color: #dfe3ee;
  `;


export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top:0%;
    right: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NewGameButton = styled(Button)`
    font-size: 20px;
    width: 160px;
    height: 40px;
    margin-top: 15px;
`;