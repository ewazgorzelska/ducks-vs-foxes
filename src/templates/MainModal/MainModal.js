import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AppContext } from 'AppContext/AppContext';
import { 
  ImageWrapper,
  LoadingWrapper,
  Error,
  ModalContainer,
  CloseButton,
  NewGameButton
 } from './MainModalStyles';
import { GrFormClose } from "react-icons/gr";
import { VscLoading } from "react-icons/vsc";

const modalContainer = document.getElementById('modal-container')

const MainModal = ({ isOpen, closeModal }) => {

  const { animalData } = useContext(AppContext);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalContainer>
        <CloseButton onClick={closeModal}><GrFormClose size={32}/></CloseButton>
        { animalData.err 
                && !animalData.isFetching 
                && <Error animalData={animalData}>Error!</Error> }
        { animalData.isFetching
                && <LoadingWrapper animalData={animalData}>
                      <div>Is loading...</div>
                      <VscLoading />
                    </LoadingWrapper> }
        { animalData.image 
          && !animalData.isFetching  
          && <ImageWrapper animalData={animalData}/> }
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
}

export default MainModal
