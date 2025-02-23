import styled from "styled-components";

export const ViewTemplate = styled.div`
  height: 565px;
  margin: 20px;
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  bottom: 100px;
  left: 0;
  right: 0;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 111.1px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #cae738;
    border-radius: 30px;
  }
`;

export const MessageBlock = styled.div`
  display: flex;
  background-color: red;
  width: 100%;
  flex-direction: column;
  justify-content: end;
  overflow: auto;
`;

//C

export const UnMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CurrentMessage = styled.div`
  background-color: #6ba5f1;
  margin: 10px;
  border-radius: 8px;
  width: fit-content;
  padding: 9px;
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageTime = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 400;
`;

export const CurrentImage = styled.img`
  width: 370px;
  height: 280px;
  border-radius: 12px;
`;
