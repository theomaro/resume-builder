/// <reference types="vite/client" />

export type Resume = {
  person: Person;
  summary: Summary;
  academics: Academic[];
  professions: Profession[];
  experiences: Experience[];
  skills: Skill[];
  references: Reference[];
};

export type Person = {
  id?: readonly string;
  firstName: string;
  middleName?: string;
  lastName: string;
  sex: string;
  dateOfBirth: string;
  nationality: string;
  placeOfDomicile: string;
  disabilities?: string;
  email: string;
  phone: string;
  address: string;
  userId: string;
};

export type Academic = {
  id: readonly string;
  award: string;
  schoolName: string;
  schoolLocation: string;
  year: string;
  uploadedCertificate: string;
  userId: string;
};

export type Profession = {
  id: readonly string;
  award: string;
  institutionName: string;
  institutionLocation: string;
  year: string;
  uploadedCertificate: string;
  uploadedTranscript: string;
  userId: string;
};

export type Experience = {
  id: readonly string;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  year: string;
  description: string;
  userId: string;
};

export type Skill = {
  id: readonly string;
  category: string;
  skillName: string;
  proficiency: number;
  certificate: string;
  userId: string;
};

export type Reference = {
  id: readonly string;
  fullName: string;
  position: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  userId: string;
};

export type Summary = {
  id: readonly string;
  position: string;
  description: string;
  userId: string;
};
