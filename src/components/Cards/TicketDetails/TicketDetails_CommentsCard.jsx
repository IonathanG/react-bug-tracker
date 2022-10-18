import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonBasic from "../../Buttons/Button_Basic";
import { useSelector } from "react-redux";
import SingleAvatar from "../../Avatar/SingleAvatar";
import useTicketComment from "../../../hooks/useTicketComment";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  padding: 15px 0px;
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
  padding-left: 15px;
`;

const TicketDetailsCommentsCard = ({ ticket = null }) => {
  const users = useSelector((state) => state.users.Users);
  const { control, handleSubmit, reset } = useForm();
  const [EditComment, status] = useTicketComment();

  // Reset the input field once the comment is updated in DB
  useEffect(() => {
    if (status === "success") {
      reset();
    }
  }, [status, reset]);

  const onSubmit = (data) => {
    // Call in custom hook to add comment and update ticket history
    EditComment(ticket, data);
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
                rows={2}
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
                <SingleAvatar
                  avatar={users[item.author]?.user_avatar}
                  size={"40px"}
                />
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
