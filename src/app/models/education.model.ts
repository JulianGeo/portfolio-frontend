import { EducationTechnology } from "./education-technology.model";

export interface Education {
  id?: string,
  institution: string,
  degree: string,
  imageUrl?: string,
  education_tech?: EducationTechnology[],
  start_date: Date,
  end_date?: Date,
}
