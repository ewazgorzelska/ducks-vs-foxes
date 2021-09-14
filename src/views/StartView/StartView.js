import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "context/AppContext";
import {
  StartViewContainer,
  GameTitle,
  ButtonsWrapper,
  Animal1,
  Animal2,
  AnimalWrapper,
} from "./StartViewStyles";
import { Button } from "components/Button/Button";
import Modal from "components/Modal/Modal";
import { API_KEY } from "filestack/api";

const CAT_URL =
  "https://api.thecatapi.com/v1/images/search";
const FOX_URL = "https://randomfox.ca/floof/";

export const FILESTACK_URL = {
  FILESTACK: "https://cdn.filestackcontent.com/",
  API_KEY,
  PARAM: "/resize=width:300/",
};

const StartView = () => {
  const [isOpen, setOpen] = useState(false);
  const { setAnimalData } = useContext(AppContext);
  const [status, setStatus] = useState({
    err: null,
    isFetching: false,
  });

  const fetchAnimal = (url) => {
    setStatus({ ...status, isFetching: true });
    axios
      .get(url)
      .then((response) => {
        setAnimalData({
          image:
            url === FOX_URL
              ? FILESTACK_URL.FILESTACK +
                FILESTACK_URL.API_KEY +
                FILESTACK_URL.PARAM +
                response.data.image
              : FILESTACK_URL.FILESTACK +
                FILESTACK_URL.API_KEY +
                FILESTACK_URL.PARAM +
                response.data[0].url,
        });
        setStatus({ ...status, isFetching: false });
      })
      .catch((err) => {
        setStatus({
          err,
          isFetching: false,
        });
      });
  };

  const closeModal = () => {
    setOpen(!isOpen);
    setAnimalData("");
  };

  const openAnimalModal = (url) => {
    setOpen(true);
    fetchAnimal(url);
  };

  return (
    <StartViewContainer>
      <GameTitle>Cats vs Foxes</GameTitle>
      <AnimalWrapper>
        <Animal1 />
        <Animal2 />
      </AnimalWrapper>
      <ButtonsWrapper>
        <Button onClick={() => openAnimalModal(CAT_URL)}>Meow</Button>
        <Button onClick={() => openAnimalModal(FOX_URL)}>Woof</Button>
      </ButtonsWrapper>
      <Modal isOpen={isOpen} closeModal={closeModal} status={status} />
    </StartViewContainer>
  );
};

export default StartView;
