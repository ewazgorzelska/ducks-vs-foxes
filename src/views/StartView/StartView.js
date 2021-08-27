import React from 'react';
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

const StartView = () => {
    return (
        <StartViewContainer>
            <GameTitle>Ducks vs Foxes</GameTitle>
            <AnimalWrapper>
                <Animal1 />
                <Animal2 />
            </AnimalWrapper>            
            <ButtonsWrapper>
                <Button>Quack</Button>
                <Button>Woof</Button>
            </ButtonsWrapper>
        </StartViewContainer>
    )
}

export default StartView;