import styled from "styled-components";

export const MessageTemplate = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
`

export const AddImage = styled.div`
    margin-left: 30px;
    cursor: pointer;
`

export const TypeMessage = styled.div`
`

export const SendMessage = styled.div`
    margin-right: 30px;
    cursor: pointer;
`

export const InputMessage = styled.input`
    outline: 0;
    border: 0;
    background: #eee;  
    border-radius: 18px;
    padding: 6px 6px 6px 15px;
    width: 300px;

    ::placeholder {
      font-weight: normal;
      opacity: 0.5;
      letter-spacing: 0.7px;
      font-size: 13px;
    }
`

export const ImageMessage = styled.span`
    text-align: center;
    font-weight: bold;
    width: fit-content;
    margin: 0 auto;
  
    &:hover {
      color: #2f2c2c;
    } 
`

export const RemoveImage = styled.div`
  &:hover {
    color: red;
    cursor: pointer;
  }
`