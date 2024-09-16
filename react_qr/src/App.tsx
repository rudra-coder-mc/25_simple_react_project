import { useState, ChangeEvent } from "react";
import QRCode from "react-qr-code"; // Make sure you are using the correct import

function App() {
  const [value, setValue] = useState<string>("");
  const [submittedValue, setSubmittedValue] = useState<string>("");

  // Handles input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // Handles button click to update the QR code
  const handleButtonClick = () => {
    setSubmittedValue(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <div>
        <label
          htmlFor="qr-input"
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          Enter Text for QR Code:
        </label>
        <input
          id="qr-input"
          value={value}
          onChange={handleInputChange}
          style={{ padding: "0.5rem", fontSize: "1rem", width: "200px" }}
        />
      </div>
      <button
        aria-label="Send to QR"
        onClick={handleButtonClick}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Generate QR Code
      </button>
      {/* Ensure QRCode is correctly imported and used */}
      {submittedValue && <QRCode value={submittedValue} size={150} />}
    </div>
  );
}

export default App;
