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

const MainModal = ({ isOpen, closeModal, status }) => {

  const { animalData, setCurrentView } = useContext(AppContext);
  const { setImgSize } = useContext(AppContext);

  function getImageSize(url){
    let img=new Image();
    img.src=url;
    img.onload=function(){
      const size = {width: this.width, height: this.height};
      setImgSize({width: size.width, height: size.height})
    };  
   }

  const startGame = () => {
    getImageSize();
    setCurrentView('GAME');
  }

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalContainer>
        <CloseButton onClick={closeModal}><GrFormClose size={32}/></CloseButton>
        { status.err 
                && !status.isFetching 
                && <Error status={status}>Error!</Error> }
        { status.isFetching
                && <LoadingWrapper status={status}>
                      <div>Is loading...</div>
                      <VscLoading />
                    </LoadingWrapper> }
        { animalData 
          && !status.isFetching  
          && <ImageWrapper animalData={animalData}/> }
        <NewGameButton onClick={startGame}>Start Game</NewGameButton>
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
