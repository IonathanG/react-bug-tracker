import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectRole = ({ userRow }) => {
  const [role, setRole] = useState(userRow.currentRole);

  const handleChange = (event) => {
    setRole(event.target.value);
    console.log(role);
    console.log(userRow);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 170 }}>
        <Select
          SelectDisplayProps={{ style: { paddingTop: 6, paddingBottom: 6 } }}
          value={role}
          onChange={handleChange}
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

export default SelectRole;
