import type { Ref } from "react";

type InputProps = {
  label: string;
  textArea: boolean;
  type?: string;
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>;
};

type ButtonProps = {
  onClick?: () => void;
};

type ProjectStateType = {
  selectedProjectId: undefined | number | null;
  projects: Project[];
  tasks: Task[];
};

type NoProjectSelectedProps = {
  onStartAddProject: () => void;
};

type ProjectsSidebarProps = {
  onStartAddProject: () => void;
  onSelectProject: (id: number) => void;
  selectedProjectId: number | null | undefined;
  projects: Project[];
};

type SelectedProjectProps = {
  project: Project;
  tasks: Task[];
  onDelete: () => void;
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
};

type Project = {
  id?: number;
  title: string;
  description: string;
  dueDate: string;
};

type NewProjectProps = {
  onAdd: (project: Project) => void;
  onCancel: () => void;
};

type ModalActions = {
  open: () => void;
};

type ModalProps = {
  ref: Ref<ModalActions>;
  buttonCaption: string;
};

type TasksProps = {
  tasks: Task[];
  onAddTask: (text: string) => void;
  onDeleteTask: (id: number) => void;
};

type NewTaskProps = {
  onAddTask: (task: string) => void;
};

type Task = {
  id: number;
  text: string;
  projectId: number;
};

export {
  type InputProps,
  type ProjectStateType,
  type NoProjectSelectedProps,
  type ButtonProps,
  type ProjectsSidebarProps,
  type Project,
  type NewProjectProps,
  type ModalProps,
  type ModalActions,
  type SelectedProjectProps,
  type TasksProps,
  type NewTaskProps,
  type Task,
};
