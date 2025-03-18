export interface ProjectSchema {
  id: string; // UUID
  title: string;
  description?: string; // Optional
  price: number;
  displayImage: string;
  projectImages: any;
  projectBlob: string;
  rating: number;
  tags: any;
}
