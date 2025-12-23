import { useState, type JSX } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.tsx";
import NoProjectSelected from "./components/NoProjectSelected.tsx";
import type { Project, ProjectStateType, Task } from "./utils/type-utils.ts";
import NewProject from "./components/NewProject.tsx";
import SelectedProject from "./components/SelectedProject.tsx";
import "./App.css";

function App() {
  const [projectsState, setProjectsState] = useState<ProjectStateType>({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleSelectProject = (id: number) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  const handleAddProject = (projectData: Project) => {
    setProjectsState((prevState) => {
      const newProject: Project = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const handleAddTask = (text: string) => {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask: Task = {
        id: taskId,
        text: text,
        projectId: prevState.selectedProjectId!,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id: number) => {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  let content: JSX.Element;
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    const selectedProject: Project = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
    )!;
    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectsState.tasks.filter(
          (task) => task.projectId === projectsState.selectedProjectId
        )}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
