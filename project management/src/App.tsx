import { useState } from "react";
// import ContentePage from "./components/ContentePage";
import NewProject from "./components/NewProject";
import NoData from "./components/NoData";
import SideBar from "./components/SideBar";

type Project = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

type Pstate = {
  selectedPID: undefined | null | number;
  projects: Project[];
};

const App = () => {
  const [projectsState, setProjectsState] = useState<Pstate>({
    selectedPID: undefined,
    projects: [],
  });

  const handelProject = (): void => {
    setProjectsState((pre) => {
      return {
        ...pre,
        selectedPID: null,
      };
    });
  };

  const handelAddProject = (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }): void => {
    const newProject = { ...projectData, id: Date.now() }; // Add an id for unique identification
    setProjectsState((pre) => {
      return {
        ...pre,
        projects: [...pre.projects, newProject],
      };
    });
  };

  let Content;

  if (projectsState.selectedPID === null) {
    Content = <NewProject onAdd={handelAddProject} />;
  } else if (projectsState.selectedPID === undefined) {
    Content = <NoData onStartNewProject={handelProject} />;
  }

  return (
    <main className="w-screen h-screen flex">
      <SideBar
        onStartNewProject={handelProject}
        projects={projectsState.projects}
      />
      {Content}
    </main>
  );
};

export default App;
