export interface ProjectDetails {
  id: string; // UUID
  title: string;
  description?: string; // Optional
  price?: number; // Optional
  displayImage?: string; // Optional
  projectImages?: any; // Can be a JSON array or object, so we use `any` or a more specific type
  projectBlob?: string; // Optional
  rating?: number; // Optional, with validation 1-5
  tags?: any; // JSON, can be an array or object, so `any` type is fine
}
