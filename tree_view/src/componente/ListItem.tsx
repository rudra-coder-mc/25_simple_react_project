import React from "react";
import MenuItem from "./MenuItem";

// Define the type for list items
interface MenuItemType {
  label: string;
  to?: string;
  children?: MenuItemType[];
}

interface ListItemProps {
  list: MenuItemType[];
}

const ListItem: React.FC<ListItemProps> = ({ list = [] }) => {
  return (
    <ul>
      {list.length > 0
        ? list.map((item, index) => (
            <MenuItem key={index} item={item} /> // Use a unique key for each item
          ))
        : null}
    </ul>
  );
};

export default ListItem;
