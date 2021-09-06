import styled, { css } from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
    margin: 0 20px 0 20px;
    width: 100%;
    height: 100%;
`;

export const AnimalImage = styled.img`
  width: 300px;
  height: 350px;
  padding-top: 10px;
`;

export const LoadingWrapper = styled(ContentWrapper)`
  font-size: 20px;
  font-weight: 700;
  gap: 20px;
  ${flex}
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
  ${flex}
  opacity: 1;
  background-color: #dfe3ee;
  `;

export const CloseButton = styled.button`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0%;
    right: 0%;
    ${flex}
    flex-direction: row;
`;

export const NewGameButton = styled(Button)`
    font-size: 20px;
    width: 160px;
    height: 40px;
    margin-top: 15px;
`;