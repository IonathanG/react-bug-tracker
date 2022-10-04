import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonBasic from "../../Buttons/Button_Basic";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase.config";
import moment from "moment/moment";
import { useSelector } from "react-redux";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 38px;
`;

const Form = styled.form``;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const CommentsContainer = styled.div``;

const CommentItem = styled.div`
  border-top: 1px solid ${({ theme }) => theme.background_Modal};
  padding: 20px 0px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  font-weight: 700;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;

    span {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const CommentText = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding-top: 15px;
`;

const TicketDetailsCommentsCard = ({ ticket = null }) => {
  const users = useSelector((state) => state.users.Users);

  const { control, handleSubmit } = useForm();
  const userID = "user_02";

  const onSubmit = (data) => {
    // Copy and Update the existing ticket's comments array with the new comment
    let CommentsList = [
      ...ticket.comments,
      {
        id: ticket?.comments.length,
        author: userID,
        created_at: moment().format("LLL"),
        comment: data.ticketComment,
      },
    ];

    // => update the comments array in the ticket then DB update
    let newTicket = { ...ticket };
    newTicket["comments"] = CommentsList;

    // DB Collection References to update comments array
    const projectsRef = doc(db, "projects", ticket.project_id);
    updateDoc(projectsRef, {
      [`tickets.${ticket.ticket_id}`]: newTicket,
    })
      .then(() => console.log("Comment Added"))
      .catch((error) => console.log(error));
  };

  return (
    <CardContainer>
      <Title>Ticket Comments</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Ticket Comment Description Input */}
        <InputContainer>
          <Controller
            name="ticketComment"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <TextField
                placeholder="Add a comment..."
                multiline={true}
                rows={4}
                value={value ? value : ""}
                onChange={onChange}
                ref={ref}
              ></TextField>
            )}
          />
        </InputContainer>

        <ButtonBasic text={"Submit"} />
      </Form>
      {ticket?.comments.length > 0 && (
        <CommentsContainer>
          {ticket.comments.map((item) => (
            <CommentItem key={item.id}>
              <CommentHeader>
                {users[item.author]?.user_avatar}
                <div>
                  {users[item.author]?.user_name}
                  <span>{item.created_at}</span>
                </div>
              </CommentHeader>
              <CommentText>{item.comment}</CommentText>
            </CommentItem>
          ))}
        </CommentsContainer>
      )}
    </CardContainer>
  );
};

export default TicketDetailsCommentsCard;
