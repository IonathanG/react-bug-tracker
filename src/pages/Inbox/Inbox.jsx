import React from "react";
import styled from "styled-components";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TagInfo from "../../components/Tags/Tag_Info";
import Navigation from "../../components/Navigation/Navigation";
import useInbox from "../../hooks/useInbox";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  font-weight: 400;
  font-size: 14px;
  display: flex;
`;

const LeftPannel = styled.div`
  flex: 2;
  padding: 15px;
  font-size: 16px;
`;

const Wrap = styled.div`
  cursor: pointer;
  transition: 0.3s ease;
  background-color: ${({ theme }) => theme.background_MainSection};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
  }
`;

const MailIcon = styled(MailOutlineIcon)`
  transform: scale(0.8);
  font-size: 2px;
`;

const RightPannel = styled.div`
  flex: 6;
  border-left: 1px solid ${({ theme }) => theme.borderColor_Block};
`;

const InboxHeader = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.borderColor_Block};
  transition: 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.hover_Table};
  }
`;

const MessageLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const MessageRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const MessageDate = styled.div`
  font-weight: 400;
  font-size: 13px;
`;

const MessageContent = styled.div``;

const DeleteIcon = styled(HighlightOffIcon)`
  cursor: pointer;
  color: ${({ theme }) => theme.color_Cyan};

  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
  }
`;

const NoMessage = styled.p`
  font-size: 18px;
  font-weight: 500;
  padding: 30px 20px;
`;

const Inbox = () => {
  const [messages, deleteMessage] = useInbox();

  return (
    <>
      <Navigation headerText={"Notifications"} />
      <Container>
        <LeftPannel>
          <Wrap>
            <div>
              <MailIcon />
              New
            </div>
            <TagInfo tagColor={"Cyan"} tagText={messages?.length} />
          </Wrap>
        </LeftPannel>

        <RightPannel>
          <InboxHeader>Inbox</InboxHeader>

          {messages?.length === 0 && (
            <NoMessage>No Messages to display</NoMessage>
          )}
          {messages?.map((message) => (
            <MessageContainer key={message.id}>
              <MessageLeft>
                <MessageHeader>
                  {message.title}
                  <TagInfo tagColor={"Cyan"} tagText={message.type} />
                </MessageHeader>
                <MessageContent>{message.content}</MessageContent>
              </MessageLeft>

              <MessageRight>
                <DeleteIcon onClick={() => deleteMessage(message.id)} />
                <MessageDate>{message.date}</MessageDate>
              </MessageRight>
            </MessageContainer>
          ))}
        </RightPannel>
      </Container>
    </>
  );
};

export default Inbox;
