import { FormEvent, useEffect, useState } from "react";
import { Academic } from "../../vite-env";

import PreviewIcon from "remixicon-react/EyeLineIcon";
import DeleteIcon from "remixicon-react/DeleteBin2LineIcon";
import UpdateIcon from "remixicon-react/PencilLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/resumeContext";

function AcademicQualifications() {
  const { resumeData, setResumeData, createOne, deleteOne, getAllByUserId } =
    useResume();
  const [academics, setAcademics] = useState<Academic[]>(resumeData.academics);
  const [academic, setAcademic] = useState<Academic>({
    id: "",
    award: "",
    schoolName: "",
    schoolLocation: "",
    year: "",
    uploadedCertificate: "",
    userId: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setAcademic({ ...academic, [ev.target.name]: ev.target.value });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const savedData = await createOne<Academic>(
      "academic_qualifications",
      academic
    );
    setAcademics([savedData, ...academics]);
  };

  const handleDelete = async (id: string) => {
    const isDeleted = await deleteOne("academic_qualifications", id);
    if (isDeleted)
      getAllByUserId<Academic>("academic_qualifications").then((data) =>
        setAcademics([...data])
      );
  };

  const handleNext = () => navigate("/resume/step/2.2");

  useEffect(() => {
    getAllByUserId<Academic>("academic_qualifications").then((data) => {
      setAcademics([...data]);
      setResumeData({
        ...resumeData,
        academics: academics,
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
            <label className="text-sm text-gray-600 capitalize" htmlFor="year">
              year
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="year"
              id="year"
              placeholder="2007 - 2010"
              onChange={handleChange}
              value={academic.year}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="school-award"
            >
              award
            </label>
            <select
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              name="award"
              id="school-award"
              onChange={handleChange}
              value={academic.award}
            >
              <option hidden disabled>
                Academic award
              </option>
              <option value="PSLE">Primary Education Certificate (PSLE)</option>
              <option value="CSEE">
                Certificate of Secondary Education Examination (CSEE)
              </option>
              <option value="ACSEE">
                Advanced Certificate of Secondary Education Examination (ACSEE)
              </option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="schoolName"
            >
              school name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="schoolName"
              id="schoolName"
              placeholder="Kipololo Secondary School"
              onChange={handleChange}
              value={academic.schoolName}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="schoolLocation"
            >
              school location
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="schoolLocation"
              id="schoolLocation"
              placeholder="Mbinga, Tanzania"
              onChange={handleChange}
              value={academic.schoolLocation}
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
              value={academic.uploadedCertificate}
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
        <span>Academic Qualifications</span>
        <span className="h-0.5 bg-teal-400 flex-1"></span>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4">
              Year
            </th>
            <th scope="col" className="px-6 py-4">
              Award
            </th>
            <th scope="col" className="px-6 py-4">
              School
            </th>
            <th scope="col" className="px-6 py-4">
              Certification
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {academics.length ? (
            academics.map((academic) => (
              <tr
                key={academic.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <td className="px-6 py-4">{academic.year}</td>
                <td className="px-6 py-4">{academic.award}</td>
                <td className="px-6 py-4 flex flex-col -space-y-0.5">
                  <p>{academic.schoolName},</p>
                  <p className="italic">{academic.schoolLocation}</p>
                </td>
                <td className="px-6 py-4">
                  <button className="flex space-x-2">
                    <PreviewIcon size={14} />
                    <span className="text-xs underline decoration-dotted">
                      Certificate
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4 basis-1/12 text-end">
                  <div className="flex items-center space-x-5">
                    <button>
                      <UpdateIcon size={14} />
                    </button>
                    <button onClick={() => handleDelete(academic.id)}>
                      <DeleteIcon size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-rose-700">
                No academic qualification is added yet
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

export default AcademicQualifications;
