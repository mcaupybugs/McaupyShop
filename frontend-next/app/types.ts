export interface User {
  id: string;
  email: string;
  profilePicture: string;
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
