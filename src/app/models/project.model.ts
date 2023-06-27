import { ProjectTechnology } from "./project-technology.model";

export interface Project {
  id?: string,
  name: string,
  description: string,
  image_url?: string,
  project_tech?: ProjectTechnology[],
  githubUrl?: string,
  webUrl?: string
}
