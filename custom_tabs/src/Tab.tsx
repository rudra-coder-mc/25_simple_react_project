import { useState } from "react";
import { Tab } from "./App"; // Ensure Tab type is correctly imported

interface TabsProps {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  // State for tracking the current selected tab index
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClick = (id: number) => {
    console.log(id);
    setCurrentIndex(id);
  };

  return (
    <div>
      {/* Render tab titles */}
      {tabs && tabs.length > 0 ? (
        tabs.map((data) => (
          <div
            onClick={() => handleClick(data.id)} // Handle tab click
            key={data.title}
            style={{
              cursor: "pointer",
              marginBottom: "10px",
              color: currentIndex === data.id ? "blue" : "black",
            }}
          >
            {data.title}
          </div>
        ))
      ) : (
        <p>No tabs available</p>
      )}

      {/* Render content of the selected tab */}
      {currentIndex !== null && (
        <div>
          {tabs.find((tab) => tab.id === currentIndex)?.content ||
            "No content available"}
        </div>
      )}
    </div>
  );
};
