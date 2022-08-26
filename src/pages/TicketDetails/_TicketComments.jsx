import React, { useState } from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";
import Input from "../../components/Input/Input_Search";
import { default as SubmitButton } from "../../components/Buttons/Button_MainStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const AddCommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-left: 15px;
`;

const AddCommentText = styled.div`
  opacity: 0.9;
`;

const Form = styled.form``;

/* ----- Props Data ----- */
const InputStyle = {
  width: "180px",
  padding: "8px 12px",
};

const ButtonStyle = {
  margin: "0 20px",
  padding: "8px 12px",
};

const Styles = {
  EntryFlex: ["2", "3", "2"],
  EntryItem: { padding: "10px 0" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Ticket Comments",
  subText: "All comments for this Ticket",
};
const ListCategories = ["Commenter", "Message", "Created"];

const TicketComments = ({ ticketComments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("comment submitted");
  };
  return (
    <Container>
      {/* Add a Comment Input */}
      <AddCommentContainer>
        <AddCommentText>Add a Comment?</AddCommentText>

        <Form onSubmit={(e) => handleSubmit(e)}>
          {/* Input */}
          <Input style={InputStyle} value={comment} setValue={setComment} />
          {/* Button */}
          <SubmitButton
            buttonStyle={ButtonStyle}
            text={"ADD COMMENT"}
            handleSubmit={handleSubmit}
          />
        </Form>
      </AddCommentContainer>

      {/* Comment List*/}
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={ticketComments}
        Links={null}
      />
    </Container>
  );
};

export default TicketComments;
