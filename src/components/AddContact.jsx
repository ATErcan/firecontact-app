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
import { useContext, useEffect, useState } from "react";
import { addNewContact, updateContact } from "../utils/firebase";
import { ContactsContext } from "../context/ContactsContextProvider";

const AddContact = () => {
  const { setContactTrigger, edit, setEdit } = useContext(ContactsContext);

  const [phoneNum, setPhoneNum] = useState("");
  const [contactInfo, setContactInfo] = useState({
    username: "",
    gender: "",
  });

  // changes the inputs if edit action triggered
  useEffect(() => {
    if (edit) {
      setContactInfo({
        username: edit.username,
        gender: edit.gender,
      });
      setPhoneNum("+" + edit.phone);
    }
  }, [edit]);

  // function to track values of name and gender inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  // function to detect if the process is editing of adding new contact
  const detectProcess = () => {
    if (edit) {
      updateContact(contactInfo, phoneNum, edit);
      setEdit("");
    } else {
      addNewContact(contactInfo, phoneNum);
    }
  };

  // function to send the data to firestore
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNum && isValidPhoneNumber(phoneNum?.toString())) {
      detectProcess();
      setPhoneNum("");
      setContactInfo("");
      setContactTrigger((prevToggle) => !prevToggle);
    } else {
      console.log("invalid");
    }
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
            name="username"
            value={contactInfo.username || ""}
            onChange={handleChange}
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
            name="gender"
            value={contactInfo.gender || ""}
            onChange={handleChange}
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
