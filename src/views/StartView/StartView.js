import React, { useState, useContext } from 'react';
import axios from "axios";
import { AppContext } from 'AppContext/AppContext';
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
import MainModal from 'templates/MainModal/MainModal';
import { API_KEY } from 'filestack/api';

const DUCK_URL = 'https://random-d.uk/api/v2/random?type=jpg';
const FOX_URL = 'https://randomfox.ca/floof/';

const FILESTACK_URL = {
    FILESTACK: 'https://cdn.filestackcontent.com/',
    API_KEY,
    PARAM: '/resize=width:400/'
}

const StartView = () => {

    const [isOpen, setOpen] = useState(false);
    const { setAnimalData } = useContext(AppContext);
    const [status, setStatus] = useState({
                                        err: null, 
                                        isFetching: false
                                    });

    const fetchAnimal = (url) => {     
        setStatus({...status, isFetching: true});
        axios.get(url)
        .then(response => {
            setAnimalData({
                image: url === FOX_URL ? 
                    FILESTACK_URL.FILESTACK 
                        + FILESTACK_URL.API_KEY 
                        + FILESTACK_URL.PARAM 
                        + response.data.image 
                    : FILESTACK_URL.FILESTACK 
                        + FILESTACK_URL.API_KEY 
                        + FILESTACK_URL.PARAM 
                        + response.data.url,
            });
            setStatus({...status, isFetching: false});
        }
            )
        .catch(err => {
            setStatus({
                err, 
                isFetching: false});
        });
};

    const closeModal = () => {
        setOpen(!isOpen);
    }
    
    const openFoxModal = () => {
        setOpen(true);
        fetchAnimal(FOX_URL);
    }

    const openDuckModal = () => {
        setOpen(true);
        fetchAnimal(DUCK_URL);
    }
    
    return (
        <StartViewContainer>
            <GameTitle>Ducks vs Foxes</GameTitle>
            <AnimalWrapper>
                <Animal1 />
                <Animal2 />
            </AnimalWrapper>            
            <ButtonsWrapper>
                <Button onClick={openDuckModal}>Quack</Button>
                <Button onClick={openFoxModal}>Woof</Button>
            </ButtonsWrapper>
            <MainModal isOpen={isOpen} closeModal={closeModal} status={status}/>
        </StartViewContainer>
    )
}

export default StartView;