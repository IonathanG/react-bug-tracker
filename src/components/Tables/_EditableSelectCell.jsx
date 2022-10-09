import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Create an editable cell renderer
const EditableSelectCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // => Custom function supplied to the table instance
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // Only update the external data when the select input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <div>
      <FormControl sx={{ minWidth: 170 }}>
        <Select
          SelectDisplayProps={{ style: { paddingTop: 6, paddingBottom: 6 } }}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Project Manager"}>Project Manager</MenuItem>
          <MenuItem value={"Developer"}>Developer</MenuItem>
          <MenuItem value={"Submitter"}>Submitter</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default EditableSelectCell;
