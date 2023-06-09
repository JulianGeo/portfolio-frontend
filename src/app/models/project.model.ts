export interface Project {
  id?: string,
  name: string,
  description: string,
  imageUrl?: string,
  technologies: string[],
  githubUrl: string,
  webUrl?: string
}
