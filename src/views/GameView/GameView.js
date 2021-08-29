import React, { useContext }from 'react';
//import styled from 'styled-components';
//import { AppContext } from 'AppContext/AppContext';
import { cutImageUp } from './getPuzzleElement';

const GameView = () => {
    //const { animalData } = useContext(AppContext);
    const pieces = cutImageUp();
    const source = pieces[0];
    
    return (
        <>
            <img id="piece" src={source} alt="cos"/>
            <img id="piece" src={source} alt="cos1"/>
            <img id="piece" src={source} alt="cos2"/>
            <img id="piece" src={source} alt="cos3"/>
        </>
    )
}

export default GameView;