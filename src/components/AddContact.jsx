import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import {
  AddContactContainer,
  FormContainer,
  Titles,
  TitleStyles,
} from "../style/AddContact.styled";
import { useState, useRef } from "react";

const AddContact = () => {
  const [phoneNum, setPhoneNum] = useState("");

  const nameRef = useRef(null);
  const genderRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPhoneNumber(phoneNum.toString())) {
      console.log("send");
    } else {
      console.log("invalid");
    }
  };

  const sendContactData = () => {
    return {
      username: nameRef.current.value,
      phone: phoneNum,
      gender: genderRef.current.value,
    };
  };

  return (
    <AddContactContainer>
      <TitleStyles>
        <Titles>AddContact</Titles>
      </TitleStyles>
      <FormContainer onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mx: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Name"
            variant="standard"
            ref={nameRef}
            required
          />
        </Box>
        <PhoneInput
          placeholder="Enter phone number"
          value={phoneNum}
          onChange={setPhoneNum}
          required
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            value="male"
            ref={genderRef}
            required
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="info" type="submit">
          Add
        </Button>
      </FormContainer>
    </AddContactContainer>
  );
};

export default AddContact;
