import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { TableCells } from "../style/ContactsTable.styled";
import { deleteContact } from "../utils/firebase";
import { formatPhoneNumberIntl } from "react-phone-number-input";

const SingleContact = ({ contact }) => {
  const { setContactTrigger, editInfo } = useContext(ContactsContext);

  // delete contact
  const handleDelete = () => {
    deleteContact(contact.id);
    setContactTrigger((prevToggle) => !prevToggle);
    toastSuccessNotify("Contact Deleted Successfully!");
  };

  // sends the data to AddContact component to edit
  const handleEdit = () => {
    editInfo(contact);
    toastSuccessNotify("Ready to Edit!");
  };

  // function to capitalize first letter of some inputs like name and gender
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <tr>
      <TableCells>{capitalizeFirstLetter(contact.username)}</TableCells>
      <TableCells>{formatPhoneNumberIntl(`+${contact.phone}`)}</TableCells>
      <TableCells>{capitalizeFirstLetter(contact.gender)}</TableCells>
      <TableCells>
        <DeleteOutlineIcon
          sx={{ cursor: "pointer" }}
          color="error"
          onClick={handleDelete}
        />
      </TableCells>
      <TableCells>
        <EditIcon
          sx={{ cursor: "pointer" }}
          color="primary"
          onClick={handleEdit}
        />
      </TableCells>
    </tr>
  );
};

export default SingleContact;
