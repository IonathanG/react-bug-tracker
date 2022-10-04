import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import ButtonBasic from "../../Buttons/Button_Basic";

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

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const Form = styled.form``;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const TicketDetailsCommentsCard = ({ comments = null }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

      <ButtonContainer></ButtonContainer>
    </CardContainer>
  );
};

export default TicketDetailsCommentsCard;
