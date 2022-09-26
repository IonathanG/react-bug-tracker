import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import ButtonBasic from "../../components/Buttons/Button_Basic";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Header = styled.header`
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-top: 30px;
  width: 50%;
  min-height: 100vh;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
  font-weight: 400;
  font-size: 14px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: 700;
  display: inline-block;
  padding-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;

  border: 1px solid ${({ theme }) => theme.border_Input};
  border-radius: 4px;
  transition: 0.3s ease-out;

  font-family: "Ubuntu", "sans-serif";
  letter-spacing: 0.1px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Ubuntu", "sans-serif";
    letter-spacing: 0.1px;
    font-size: 14px;
    opacity: 0.9;
    padding-left: 0px;
  }
`;

const InputDescription = styled(Input)`
  min-height: 100px;
`;

const Select = styled.select``;
const MenuItem = styled.option``;

const AddProject = () => {
  // const [reqDate, setreqDate] = useState(new Date());
  const [startDate, setStarDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState(null);

  const {
    control,
    // register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: "",
      projectDescription: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header>Add Project</Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="projectName">Project Name</Label>
          <Controller
            name="projectName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.projectName && <p>Project Needs a name</p>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="projectDescription">Project Description</Label>
          <Controller
            name="projectDescription"
            control={control}
            render={({ field }) => <InputDescription {...field} />}
          />
        </InputContainer>

        <DateContainer>
          <InputContainer>
            <Label htmlFor="startDate">Start Date</Label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="startDate"
                rules={{ required: "This field is required" }}
                defaultValue={""}
                control={control}
                render={({ field }) => (
                  <DatePicker
                    value={value}
                    onChange={(newValue) => {
                      setStarDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    {...field}
                  />
                )}
              />
            </LocalizationProvider>
          </InputContainer>

          <InputContainer>
            <Label htmlFor="endDate">End Date</Label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="endDate"
                defaultValue={""}
                control={control}
                render={({ field }) => (
                  <DatePicker
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    {...field}
                  />
                )}
              />
            </LocalizationProvider>
          </InputContainer>
        </DateContainer>

        <InputContainer>
          <Label htmlFor="priority">Choose a priority</Label>
          <Controller
            name="priority"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select value={value} onChange={onChange}>
                <MenuItem value="urgent">Urgent</MenuItem>
                <MenuItem value="high">High</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="low">Low</MenuItem>
              </Select>
            )}
            defaultValue="Urgent" // make sure to set up defaultValue
          />
        </InputContainer>

        <ButtonBasic text={"Create"} />
      </Form>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
    </>
  );
};

export default AddProject;
