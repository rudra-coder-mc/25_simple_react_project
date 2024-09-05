import "./App.css";
import ListItem from "./componente/ListItem";
import { menus } from "./data";

// console.log(data);

function App() {
  return (
    <>
      <ListItem list={menus} />
    </>
  );
}

export default App;
