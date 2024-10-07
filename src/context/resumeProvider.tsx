import { ReactNode, useState } from "react";
import ResumeContext from "./resumeContext";
import { Resume } from "../vite-env";
import { ClientResponseError } from "pocketbase";
import pb from "../lib/pocketbase";
import { useAuth } from "./authContext";

function ResumeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [resumeData, setResumeData] = useState<Resume>({
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
  });

  async function createOne<T>(collection: string, data: T) {
    try {
      return await pb
        .collection(collection)
        .create<T>({ ...data, userId: user?.id });
    } catch (error) {
      const pocketError = error as ClientResponseError;
      throw new Error(pocketError.message);
    }
  }

  async function deleteOne(collection: string, id: string) {
    try {
      return await pb.collection(collection).delete(id);
    } catch (error) {
      const pocketError = error as ClientResponseError;
      throw new Error(pocketError.message);
    }
  }

  async function getAllByUserId<T>(collection: string): Promise<T[]> {
    try {
      return await pb.collection(collection).getFullList<T>({
        filter: `userId = "${user?.id}"`,
        requestKey: null,
      });
    } catch (error) {
      const pocketError = error as ClientResponseError;
      throw new Error(pocketError.message);
    }
  }

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        createOne,
        deleteOne,
        getAllByUserId,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeProvider;
