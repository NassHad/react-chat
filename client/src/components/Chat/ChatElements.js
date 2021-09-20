import styled from 'styled-components';

export const ReadMe = styled.div`

`;

export const ChatContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: rgba(111, 163, 183, 0.5);
`;

export const ChatMessages = styled.div`
  margin: 10px auto;
  border: 1px solid gray;
  background-color: white;
  min-height: 48rem;
  width: 480px;
  display: flex;
  align-items: flex-end;
  border-radius: 5px;
`;

export const ChatList = styled.ul`
  font-size: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 10px;
`;

export const ChatMessage = styled.li`
  list-style-type: none;
`;

export const ChatTextArea = styled.textarea`
  width: 380px;
  margin: 10px;
`;

export const ChatButton = styled.button`
  width: 80px;
  margin: 10px;
`;