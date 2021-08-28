import React from 'react'
//import ReactModal from 'react-modal';
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'components/atoms/Button/Button'
import { GrFormClose } from "react-icons/gr";

const modalContainer = document.getElementById('modal-container')

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

const Adiv = styled.div`
    margin: 0 20px 0 20px;
  min-height: 300px;
  min-width: 300px;
  background-color: yellow;
`;

const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid black;
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

const MainModal = ({ isOpen, toggleModal, children }) => {
  return (
    isOpen &&
    ReactDOM.createPortal(
      <ModalContainer>
         <CloseButton onClick={toggleModal}><GrFormClose size={32}/></CloseButton>
        <Adiv>blablablabla</Adiv>
        {children}
        <NewGameButton>Start Game</NewGameButton>
      </ModalContainer>,
      modalContainer
    )
  )
}

MainModal.propTypes = {
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func,
  children: PropTypes.element
}

export default MainModal
