import { ProjectSchema } from "@/components/Project/Project.model";

export interface User {
  id: string;
  email: string;
  profilePicture: string;
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  selectedProject: ProjectSchema | null;
  setSelectedProject: React.Dispatch<
    React.SetStateAction<ProjectSchema | null>
  >;
}
