import React from "react";
import styled from "styled-components";
import { Close } from "styled-icons/material/Close";
import { WindowClose } from "styled-icons/fa-solid/WindowClose";

const BgModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ContentModal = styled.div`
  width: 50%;
  height: 60%;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.iframe`
  width: 85%;
  height: 85%;
  display: block;
`;

const CloseButton = styled(WindowClose)`
  position: absolute;
  top: 0;
  right: 12px;
  color: #30cfd0;
`;

const Modal = ({ closeModal }) => {
  if () {
    return (
      <BgModal>
        <ContentModal>
          <CloseButton
            size="36"
            title="Close modal"
          />
          <Video
            title="Mel Quesada motion graphics demo reel"
            src="https://www.youtube.com/embed/UoGEM0D1xtU?autoplay=1"
            allowFullScreen
          />
        </ContentModal>
      </BgModal>
    );
  } else return null;
};

export default Modal;
