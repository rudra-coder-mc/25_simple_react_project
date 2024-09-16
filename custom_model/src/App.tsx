import { useRef } from "react";
import "./App.css";
import Model from "./Model";

function App() {
  const modelRef = useRef<HTMLDialogElement>(null);

  const content = {
    title: "This is the title",
    content: "This is the content of the modal",
  };

  // Method to show the modal
  const handleOpen = () => {
    if (modelRef.current) {
      modelRef.current.showModal();
    }
  };

  // Method to close the modal
  const handleClose = () => {
    if (modelRef.current) {
      modelRef.current.close();
    }
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Model ref={modelRef} {...content} onClose={handleClose} />
    </>
  );
}

export default App;
