import React from "react";
import Button from "./Button";

interface prop {
  onStartNewProject: () => void;
}

const NoData: React.FC<prop> = ({ onStartNewProject }) => {
  return (
    <div className="w-2/3 flex flex-col items-center justify-center h-full text-center text-slate-600">
      <h2 className="mb-4 text-lg font-semibold md:text-xl">
        No Project Selected
      </h2>
      <p className="mb-8 text-sm md:text-base">
        It looks like you haven't selected a project yet.
      </p>
      <Button
        variant="primary"
        onClick={onStartNewProject}
        className="px-6 py-2 text-sm md:text-base"
      >
        + Create New Project
      </Button>
    </div>
  );
};

export default NoData;
