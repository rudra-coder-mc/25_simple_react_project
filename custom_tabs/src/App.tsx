import "./App.css";
import { Tabs } from "./Tab";

export interface Tab {
  id: number;
  title: string;
  content: string;
}

function App() {
  const tabs: Tab[] = [
    {
      id: 1,
      title: "tab 1",
      content: "contente form tab 1",
    },
    {
      id: 2,
      title: "tab 2",
      content: "contente form tab 2",
    },
    {
      id: 3,
      title: "tab 3",
      content: "contente form tab 3",
    },
  ];
  return (
    <>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
