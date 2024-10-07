import { createContext, useContext } from "react";
import { Resume } from "../vite-env";

type ResumeContextTypes = {
  resumeData: Resume;
  setResumeData: React.Dispatch<React.SetStateAction<Resume>>;
  createOne: <T>(collection: string, data: T) => Promise<T>;
  deleteOne: (collection: string, id: string) => Promise<boolean>;
  getAllByUserId: <T>(collection: string) => Promise<T[]>;
};

const ResumeContext = createContext<ResumeContextTypes>({
  resumeData: {
    person: {
      id: "",
      firstName: "",
      middleName: "",
      lastName: "",
      nationality: "",
      dateOfBirth: "",
      placeOfDomicile: "",
      sex: "",
      email: "",
      phone: "",
      address: "",
      disabilities: "",
      userId: "",
    },
    academics: [],
    professions: [],
    experiences: [],
    skills: [],
    references: [],
    summary: {
      id: "",
      position: "",
      description: "",
      userId: "",
    },
  },
  setResumeData: () => {},
  createOne: async <T>() => <Promise<T>>{},
  deleteOne: () => <Promise<boolean>>{},
  getAllByUserId: <T>() => <Promise<T[]>>{},
});

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context)
    throw new Error("ResumeContext must be used within ResumeProvider");
  return context;
};

export default ResumeContext;
