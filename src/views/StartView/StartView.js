import React, { useState } from 'react';
import axios from "axios";
import {
    StartViewContainer,
    GameTitle,
    ButtonsWrapper,
    Animal1,
    Animal2,
    AnimalWrapper,
} 
    from './StartViewStyles';
//import DuckModal from 'components/molecules/DuckModal/DuckModal';
import { Button } from 'components/atoms/Button/Button';
import MainModal from 'templates/MainModal/MainModal';

const DUCK_URL = 'https://random-d.uk/api/v2/random?type=jpg';
const FOX_URL = 'https://randomfox.ca/floof/';

const StartView = () => {

    const [isOpen, setOpen] = useState(false);
    const [animalData, setAnimalData] = useState({
                                        image: '',
                                        err: null, 
                                        isFetching: false
                                    });
    //const [foxData, setFoxData] = useState({fox: '', isFetching: false})

    // const fetchDuck = () => {     
    //         setDuckData({...duckData, isFetching: true});
    //         axios.get(DUCK_URL)
    //         .then(response => {
    //             setDuckData({
    //                 duck: response.data.url,
    //                 isFetching: false});
    //         }
    //             )
    //         .catch(err => {
    //             setDuckData({
    //                 ...duckData, 
    //                 err, 
    //                 isFetching: false});
    //         });
    // };

    const fetchAnimal = (url) => {     
        setAnimalData({...animalData, isFetching: true});
        axios.get(url)
        .then(response => {
            setAnimalData({
                image: url === FOX_URL ? response.data.image : response.data.url,
                isFetching: false
            });
        }
            )
        .catch(err => {
            setAnimalData({
                ...animalData, 
                err, 
                isFetching: false});
        });
};

    const closeModal = () => {
        
        setOpen(!isOpen);
    }
    
    const toggleFoxModal = () => {
        setOpen(true);
        fetchAnimal(FOX_URL);
    }

    const toggleDuckModal = () => {
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
                <Button onClick={toggleDuckModal}>Quack</Button>
                <Button onClick={toggleFoxModal}>Woof</Button>
            </ButtonsWrapper>
            <MainModal isOpen={isOpen} closeModal={closeModal} animalData={animalData} />
                {/* <DuckModal /> */}
        </StartViewContainer>
    )
}

export default StartView;