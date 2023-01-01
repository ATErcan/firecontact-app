import Header from "./components/Header";
import AddContact from "./components/AddContact";
import { AppContainer } from "./style/App.styled";
import ContactsTable from "./components/ContactsTable";

function App() {
  return (
    <div>
      <Header />
      <AppContainer>
        <AddContact />
        <ContactsTable />
      </AppContainer>
    </div>
  );
}

export default App;
