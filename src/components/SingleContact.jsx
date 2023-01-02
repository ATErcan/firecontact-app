import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContextProvider";
import { deleteContact } from "../utils/firebase";

const SingleContact = ({ contact }) => {
  const { setContactTrigger } = useContext(ContactsContext);

  const handleDelete = () => {
    deleteContact(contact.id);
    setContactTrigger((prevToggle) => !prevToggle);
  };

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
        <EditIcon color="primary" />
      </td>
    </tr>
  );
};

export default SingleContact;
