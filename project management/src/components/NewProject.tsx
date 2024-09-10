import React, { useRef } from "react";
import Input from "./Input";

interface NewProjectProps {
  onAdd: (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => void;
}

const NewProject: React.FC<NewProjectProps> = ({ onAdd }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    // Retrieve values from refs
    const title = titleRef.current?.value.trim();
    const description = descriptionRef.current?.value.trim();
    const dueDate = dueDateRef.current?.value;

    // Basic validation to ensure fields are not empty
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields.");
      return;
    }

    // Create project data object
    const projectData = {
      title,
      description,
      dueDate,
    };

    // Call onAdd with the project data
    onAdd(projectData);
  };

  return (
    <div className="w-2/3 m-10 p-6 bg-white rounded-lg shadow-md">
      <menu className="flex items-center justify-center gap-6 mb-6">
        <li>
          <button
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
            onClick={() => console.log("Cancel Clicked")}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Save
          </button>
        </li>
      </menu>
      <div className="space-y-4">
        <Input
          label="Title"
          ref={titleRef}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Input
          label="Description"
          ref={descriptionRef}
          textarea
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Input
          label="Due Date"
          ref={dueDateRef}
          type="date"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default NewProject;
