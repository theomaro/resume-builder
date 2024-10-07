import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profession } from "../../vite-env";

import PreviewIcon from "remixicon-react/EyeLineIcon";
import DeleteIcon from "remixicon-react/DeleteBin2LineIcon";
import UpdateIcon from "remixicon-react/PencilLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useResume } from "../../context/resumeContext";

function ProfessionalQualifications() {
  const { resumeData, setResumeData, createOne, deleteOne, getAllByUserId } =
    useResume();
  const [professions, setProfessions] = useState<Profession[]>(
    resumeData.professions
  );
  const [profession, setProfession] = useState<Profession>({
    id: "",
    award: "",
    institutionName: "",
    institutionLocation: "",
    year: "",
    uploadedCertificate: "",
    uploadedTranscript: "",
    userId: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void =>
    setProfession({ ...profession, [ev.target.name]: ev.target.value });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const savedData = await createOne<Profession>(
      "professional_qualifications",
      profession
    );
    setProfessions([savedData, ...professions]);
  };

  const handleDelete = async (id: string): Promise<void> => {
    const isDeleted = await deleteOne("professional_qualifications", id);
    if (isDeleted)
      getAllByUserId<Profession>("professional_qualifications").then((data) =>
        setProfessions([...data])
      );
  };

  const handleNext = (): void => navigate("/resume/step/3");

  useEffect(() => {
    getAllByUserId<Profession>("professional_qualifications").then((data) => {
      setProfessions([...data]);
      setResumeData({
        ...resumeData,
        professions: professions,
      });
    });
  });

  return (
    <>
      <div className="flex items-center text-sm space-x-2 mt-6 mb-5">
        <span className="h-0.5 bg-teal-400 flex-1"></span>
        <span>New Qualification</span>
        <span className="h-0.5 bg-teal-400 flex-1"></span>
      </div>

      <form method="post" onSubmit={handleSubmit}>
        <div className="grid grid-cols-7 gap-8">
          <div className="col-span-1 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="college-year"
            >
              year
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="year"
              id="college-year"
              placeholder="2010 - 2013"
              onChange={handleChange}
              value={profession.year}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label className="text-sm text-gray-600 capitalize" htmlFor="award">
              award
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="award"
              id="award"
              placeholder="Bachelor of Science with Education"
              onChange={handleChange}
              value={profession.award}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="institutionName"
            >
              institution name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="institutionName"
              id="institutionName"
              placeholder="Sokoine University of Agriculture"
              onChange={handleChange}
              value={profession.institutionName}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="institutionLocation"
            >
              institution location
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="institutionLocation"
              id="institutionLocation"
              placeholder="Morogoro, Tanzania"
              onChange={handleChange}
              value={profession.institutionLocation}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="uploadedCertificate"
            >
              Certificate
            </label>

            <input
              className="font-medium text-sm text-gray-500 bg-gray-100 rounded cursor-pointer file:cursor-pointer file:border-0 file:py-1.5 file:px-2.5 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white placeholder:capitalize"
              autoComplete="true"
              type="file"
              name="uploadedCertificate"
              id="uploadedCertificate"
              placeholder="upload certificate"
              onChange={handleChange}
              value={profession.uploadedCertificate}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="uploadedTranscript"
            >
              Transcript
            </label>

            <input
              className="font-medium text-sm text-gray-500 bg-gray-100 rounded cursor-pointer file:cursor-pointer file:border-0 file:py-1.5 file:px-2.5 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white placeholder:capitalize"
              autoComplete="true"
              type="file"
              name="uploadedTranscript"
              id="uploadedTranscript"
              placeholder="upload transcript"
              onChange={handleChange}
              value={profession.uploadedTranscript}
            />
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-violet-400 text-gray-100 rounded-s font-medium px-3.5 py-1.5 text-sm text-nowrap text-center flex items-center gap-x-2"
          >
            <AddIcon size={16} />
            <span>Add</span>
          </button>
        </div>
      </form>

      <div className="flex items-center text-sm space-x-2 mt-6 mb-5">
        <span className="h-0.5 bg-teal-400 flex-1"></span>
        <span>Professional Qualifications</span>
        <span className="h-0.5 bg-teal-400 flex-1"></span>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-4">Year</th>
            <th className="px-6 py-4">Award</th>
            <th className="px-6 py-4">Institution</th>
            <th className="px-6 py-4">Certification</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {professions.length ? (
            professions.map((profession) => (
              <tr
                key={profession.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <td className="px-6 py-4 text-nowrap">{profession.year}</td>
                <td className="px-6 py-4 text-nowrap">{profession.award}</td>
                <td className="px-6 py-4 flex flex-col -space-y-0.5 text-nowrap">
                  <p>{profession.institutionName},</p>
                  <p className="italic">{profession.institutionLocation}</p>
                </td>
                <td className="px-6 py-4 space-y-1.5">
                  <button className="flex space-x-2">
                    <PreviewIcon size={14} />
                    <span className="text-xs underline decoration-dotted">
                      Certificate
                    </span>
                  </button>
                  <button className="flex space-x-2">
                    <PreviewIcon size={14} />
                    <span className="text-xs underline decoration-dotted">
                      Transcript
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-5">
                    <button>
                      <UpdateIcon size={14} />
                    </button>
                    <button onClick={() => handleDelete(profession.id)}>
                      <DeleteIcon size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-rose-700">
                No professional qualification is added yet
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-16">
        <button
          onClick={handleNext}
          type="button"
          className="rounded-e font-medium px-3.5 py-1.5 text-sm text-nowrap text-center flex items-center space-x-2 bg-teal-600 text-gray-200"
        >
          <span>Next</span>
          <NextIcon size={16} />
        </button>
      </div>
    </>
  );
}

export default ProfessionalQualifications;
