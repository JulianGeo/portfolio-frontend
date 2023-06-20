
import { ExperienceTechnology } from "./experience-technoloty.model";

export interface Experience {
  id?: string,
  company: string,
  description: string,
  position: string,
  image_url?: string,
  experience_tech?: ExperienceTechnology[],
  start_date: Date,
  end_date?: Date,
}
