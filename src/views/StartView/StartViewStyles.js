import styled from 'styled-components';
import duck from 'assets/duck.png';
import fox from 'assets/fox.jpg';

export const StartViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 3em auto auto auto;
    width: 500px;
    height: 600px;
    background-color: #4267B2;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(66,103,178,0.6); 
    box-shadow: 5px 5px 15px 5px rgba(66,103,178,0.6);
`;

export const GameTitle = styled.h1`
    font-size: 40px;
    color: #FFF;
    font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
`;

export const Animal1 = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${duck});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 37% 50%;
    border-radius: 10px;
`;

export const Animal2 = styled(Animal1)`
    background-image: url(${fox});
`;

export const AnimalWrapper = styled.div`
    display: flex;
    gap: 30px;
`;