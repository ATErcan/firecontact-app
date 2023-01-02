import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
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
      <td style={{ padding: "1rem" }}>
        {capitalizeFirstLetter(contact.username)}
      </td>
      <td>{contact.phone}</td>
      <td>{capitalizeFirstLetter(contact.gender)}</td>
      <td>
        <DeleteOutlineIcon color="error" onClick={handleDelete} />
      </td>
      <td>
        <EditIcon color="primary" onClick={handleEdit} />
      </td>
    </tr>
  );
};

export default SingleContact;
