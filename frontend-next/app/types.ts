import { ProjectDetails } from "@/components/Project/Project.model";

export interface User {
  id: string;
  email: string;
  profilePicture: string;
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  selectedProject: ProjectDetails | null;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<ProjectDetails | null>
  >;
}
