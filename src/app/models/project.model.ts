import { ProjectTechnology } from "./project-technology.model";

export interface Project {
  id?: string,
  name: string,
  description: string,
  imageUrl?: string,
  project_tech?: ProjectTechnology[],
  githubUrl?: string,
  webUrl?: string
}
