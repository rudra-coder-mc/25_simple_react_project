import React, { useState } from "react";
import ListItem from "./ListItem";

// Define the type for a menu item
interface MenuItemProps {
  item: {
    label: string;
    to?: string; // Optional if `to` is not always present
    children?: MenuItemProps["item"][]; // Recursive type for nested children
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  // Use state to keep track of which items' children are visible
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<
    Record<string, boolean>
  >({});

  // Toggle the visibility of children for a specific menu item
  function handleToggleChildren(getCurrentLabel: string): void {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [getCurrentLabel]: !prev[getCurrentLabel],
    }));
    console.log(displayCurrentChildren);
  }

  return (
    <li>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span
            onClick={() => handleToggleChildren(item.label)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        )}
      </div>
      {item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] && <ListItem list={item.children} />}
    </li>
  );
};

export default MenuItem;
