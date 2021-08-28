import React, { useState } from 'react';
import {
    StartViewContainer,
    GameTitle,
    ButtonsWrapper,
    Animal1,
    Animal2,
    AnimalWrapper,
} 
    from './StartViewStyles';
import { Button } from 'components/atoms/Button/Button';
import MainModal from 'components/organisms/MainModal/MainModal';

const StartView = () => {

    const [isOpen, setOpen] = useState(false);

    // const showModal = () => setOpen(true);
    // const closeModal = () => setOpen(!isOpen);

    const toggleModal = () => setOpen(!isOpen);

    return (
        <StartViewContainer>
            <GameTitle>Ducks vs Foxes</GameTitle>
            <AnimalWrapper>
                <Animal1 />
                <Animal2 />
            </AnimalWrapper>            
            <ButtonsWrapper>
                <Button onClick={toggleModal}>Quack</Button>
                <Button>Woof</Button>
            </ButtonsWrapper>
            <MainModal isOpen={isOpen} toggleModal={toggleModal}/>
        </StartViewContainer>
    )
}

export default StartView;