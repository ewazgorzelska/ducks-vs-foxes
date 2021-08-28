import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { GrFormClose } from "react-icons/gr";
import { VscLoading } from "react-icons/vsc";

const modalContainer = document.getElementById('modal-container')

const ContentWrapper = styled.div`
    margin: 0 20px 0 20px;
    height: 300px;
    width: 300px;
`;

const ImageWrapper = styled(ContentWrapper)`
background-image: url('${props => props.animalData.image}');
background-repeat: no-repeat;
background-size: cover;
`;

const LoadingWrapper = styled(ContentWrapper)`
font-size: 20px;
font-weight: 700;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Error = styled(LoadingWrapper)`
background-color: pink;
`;

const ModalContainer = styled.div`
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


const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top:0%;
    right: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NewGameButton = styled(Button)`
    font-size: 20px;
    width: 160px;
    height: 40px;
    margin-top: 15px;
`;

const MainModal = ({ isOpen, closeModal, animalData}) => {
  console.log(animalData)
  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalContainer>
        <CloseButton onClick={closeModal}><GrFormClose size={32}/></CloseButton>
        {animalData.err 
                && !animalData.isFetching 
                && <Error animalData={animalData}>Error!</Error>}
            {animalData.isFetching && 
                <LoadingWrapper animalData={animalData}>
                    <span>Is loading...</span>
                    <VscLoading />
                </LoadingWrapper>}
            {animalData.image && <ImageWrapper animalData={animalData}/>}
        <NewGameButton>Start Game</NewGameButton>
      </ModalContainer>,
      modalContainer
    )
  )
}

MainModal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.element,
  animalData: PropTypes.object
}

export default MainModal
