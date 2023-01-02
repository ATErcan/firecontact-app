import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
import { TableCells } from "../style/ContactsTable.styled";
import { deleteContact } from "../utils/firebase";

const SingleContact = ({ contact }) => {
  const { setContactTrigger, editInfo } = useContext(ContactsContext);

  // delete contact
  const handleDelete = () => {
    deleteContact(contact.id);
    setContactTrigger((prevToggle) => !prevToggle);
  };

  // sends the data to AddContact component to edit
  const handleEdit = () => {
    editInfo(contact);
  };

  // function to capitalize first letter of some inputs like name and gender
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <tr>
      <TableCells>{capitalizeFirstLetter(contact.username)}</TableCells>
      <TableCells>{contact.phone}</TableCells>
      <TableCells>{capitalizeFirstLetter(contact.gender)}</TableCells>
      <TableCells>
        <DeleteOutlineIcon color="error" onClick={handleDelete} />
      </TableCells>
      <TableCells>
        <EditIcon color="primary" onClick={handleEdit} />
      </TableCells>
    </tr>
  );
};

export default SingleContact;
