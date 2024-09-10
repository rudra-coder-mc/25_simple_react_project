import React from "react";
import Button from "./Button";

type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};
interface prop {
  onStartNewProject: () => void;
  projects: Project[];
}
const SideBar: React.FC<prop> = ({ onStartNewProject, projects }) => {
  return (
    <aside className="w-1/3 h-screen bg-slate-900 text-slate-50 px-8 py-16 md:w-72 flex flex-col justify-between">
      <div>
        <h2 className="mb-8 text-lg font-black uppercase text-slate-200 md:text-xl">
          Your Project
        </h2>
        <Button
          variant="secondary"
          className="w-full mb-4"
          onClick={onStartNewProject}
        >
          + Add Project
        </Button>
        <ul className="space-y-4">
          {/* Placeholder list items */}
          {projects.map((project) => (
            <li className="px-4 py-2 text-sm rounded-md cursor-pointer bg-slate-800 hover:bg-slate-700 md:text-base transition-colors duration-200">
              {project.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">
        © 2024 Your Company
      </div>
    </aside>
  );
};

export default SideBar;
