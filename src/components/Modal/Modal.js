import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { AppContext } from "context/AppContext";
import {
  AnimalImage,
  LoadingWrapper,
  Error,
  ModalContainer,
  CloseButton,
  CloseIcon,
  NewGameButton,
} from "./ModalStyles";
import { VscLoading } from "react-icons/vsc";
import { FILESTACK_URL } from "views/StartView/StartView";

const modalContainer = document.getElementById("modal-container");

const Modal = ({ isOpen, closeModal, status }) => {
  const { animalData, setCurrentView, setImgSize } = useContext(AppContext);

  const getImageSize = (url) => {
    axios
      .get(
        FILESTACK_URL.FILESTACK + FILESTACK_URL.API_KEY + "/imagesize/" + url
      )
      .then((response) => {
        setImgSize({
          height: response.data.height,
          width: response.data.width,
        });
      })
      .catch((err) => console.log(err + "No image size available"));
  };

  const startGame = () => {
    getImageSize(animalData.image);
    setCurrentView("LEVEL");
  };

  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalContainer>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        {status.err && !status.isFetching && (
          <Error status={status}>Error!</Error>
        )}
        {status.isFetching && (
          <LoadingWrapper status={status}>
            <div>Is loading...</div>
            <VscLoading />
          </LoadingWrapper>
        )}
        {animalData && !status.isFetching && (
          <AnimalImage animalData={animalData} />
        )}
        <NewGameButton onClick={startGame}>Start Game</NewGameButton>
      </ModalContainer>,
      modalContainer
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.element,
};

export default Modal;
