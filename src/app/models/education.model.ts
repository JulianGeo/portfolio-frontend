export interface Education {
  id?: string,
  institution: string,
  degree: string,
  imageUrl?: string,
  startYear: Date,
  endYear?: Date|string,
}
