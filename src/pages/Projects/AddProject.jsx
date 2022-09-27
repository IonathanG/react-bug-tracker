import React from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ButtonBasic from "../../components/Buttons/Button_Basic";

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

const AddProject = () => {
  const { control, handleSubmit } = useForm({
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
        {/* Project Name Input */}
        <InputContainer>
          <Label htmlFor="projectName">Project Name</Label>
          <Controller
            name="projectName"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value, ref }, fieldState }) => (
              <TextField
                size="small"
                value={value ? value : ""}
                onChange={onChange}
                ref={ref}
                error={Boolean(fieldState.error)}
                helperText={fieldState?.error?.message}
              ></TextField>
            )}
          />
        </InputContainer>

        {/* Project Description Input */}
        <InputContainer>
          <Label htmlFor="projectDescription">Project Description</Label>
          <Controller
            name="projectDescription"
            control={control}
            render={({ field }) => <InputDescription {...field} />}
          />
        </InputContainer>

        {/* Start Date Picker */}
        <DateContainer>
          <InputContainer>
            <Label htmlFor="startDate">Start Date</Label>
            <Controller
              name="startDate"
              control={control}
              defaultValue={null}
              rules={{ required: "This field is required" }}
              render={({ field: { onChange, value, ref }, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        sx={{ width: "100%" }}
                        {...params}
                        error={Boolean(fieldState.error)}
                        helperText={fieldState?.error?.message}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
            />
          </InputContainer>

          {/* End Date Picker */}
          <InputContainer>
            <Label htmlFor="endDate">End Date</Label>
            <Controller
              name="endDate"
              control={control}
              defaultValue={null}
              rules={{ required: "This field is required" }}
              render={({ field: { onChange, value, ref }, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    renderInput={(params) => (
                      <TextField
                        size="small"
                        sx={{ width: "100%" }}
                        {...params}
                        error={Boolean(fieldState.error)}
                        helperText={fieldState?.error?.message}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
            />
          </InputContainer>
        </DateContainer>

        {/* Priority Select */}
        <InputContainer>
          <Label htmlFor="priority">Choose a priority</Label>
          <Controller
            name="priority"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value, ref }, fieldState }) => (
              <TextField
                select
                size="small"
                defaultValue={""}
                value={value ? value : ""}
                onChange={onChange}
                ref={ref}
                error={Boolean(fieldState.error)}
                helperText={fieldState?.error?.message}
              >
                <MenuItem value="Urgent">Urgent</MenuItem>
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </TextField>
            )}
          />
        </InputContainer>

        {/* Project Manager Select */}
        <InputContainer>
          <Label htmlFor="projectManager">Project Manager</Label>
          <Controller
            name="projetManager"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, value, ref }, fieldState }) => (
              <TextField
                select
                size="small"
                defaultValue={""}
                value={value ? value : ""}
                onChange={onChange}
                ref={ref}
                error={Boolean(fieldState.error)}
                helperText={fieldState?.error?.message}
              >
                <MenuItem value="Tromso Two">Tromso Two</MenuItem>
              </TextField>
            )}
          />
        </InputContainer>

        <ButtonBasic text={"Create"} />
      </Form>
    </>
  );
};

export default AddProject;
