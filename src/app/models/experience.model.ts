export interface Experience {
  id?: string,
  company: string,
  description: string,
  position: string,
  imageUrl?: string,
  startYear: Date,
  endYear?: Date|string,
}
