import { FormEvent, useEffect, useState } from "react";
import { Experience } from "../../vite-env";

import DeleteIcon from "remixicon-react/DeleteBin2LineIcon";
import UpdateIcon from "remixicon-react/PencilLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/resumeContext";

function WorkExperience() {
  const { resumeData, setResumeData, createOne, deleteOne, getAllByUserId } =
    useResume();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [experience, setExperience] = useState<Experience>({
    id: "",
    jobTitle: "",
    companyName: "",
    companyLocation: "",
    year: "",
    description: "",
    userId: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setExperience({ ...experience, [ev.target.name]: ev.target.value });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const savedData = await createOne<Experience>(
      "work_experiences",
      experience
    );
    setExperiences([savedData, ...experiences]);
  };

  const handleDelete = async (id: string): Promise<void> => {
    const isDeleted = await deleteOne("work_experiences", id);
    if (isDeleted)
      getAllByUserId<Experience>("work_experiences").then((data) =>
        setExperiences([...data])
      );
  };

  const handleNext = (): void => navigate("/resume/step/4");

  useEffect(() => {
    getAllByUserId<Experience>("work_experiences").then((data) => {
      setExperiences([...data]);
      setResumeData({
        ...resumeData,
        experiences: experiences,
      });
    });
  });

  return (
    <section className="shadow-md rounded-b p-10">
      <article>
        <h2 className="font-medium text-sm text-gray-600">Work Experience</h2>
        <p className="text-xs text-gray-600">Mandatory Step</p>
      </article>

      <div className="flex items-center text-sm space-x-2 mt-6 mb-5">
        <span className="h-0.5 bg-teal-400 flex-1"></span>
        <span>New Work Experience</span>
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
              value={experience.year}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="React developer"
              onChange={handleChange}
              value={experience.jobTitle}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="companyName"
            >
              company name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="companyName"
              id="companyName"
              placeholder="FluentTek"
              onChange={handleChange}
              value={experience.companyName}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="companyLocation"
            >
              company location
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="companyLocation"
              id="companyLocation"
              placeholder="Mbinga, Tanzania"
              onChange={handleChange}
              value={experience.companyLocation}
            />
          </div>
          <div className="col-span-5 flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="description"
            >
              description
            </label>
            <textarea
              className="bg-gray-100 h-24 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              name="description"
              id="description"
              placeholder="description"
              onChange={handleChange}
              value={experience.description}
            ></textarea>
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
        <span>Work Experiences</span>
        <span className="h-0.5 bg-teal-400 flex-1"></span>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-4">Year</th>
            <th className="px-6 py-4">Job Title</th>
            <th className="px-6 py-4">Company</th>
            <th className="px-6 py-4">description</th>
            <th className="px-6 py-4 sr-only">Action</th>
          </tr>
        </thead>

        <tbody>
          {experiences.length ? (
            experiences.map((experience) => (
              <tr
                key={experience.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <td className="px-6 py-4">{experience.year}</td>
                <td className="px-6 py-4">{experience.jobTitle}</td>
                <td className="px-6 py-4 flex flex-col -space-y-0.5">
                  <p>{experience.companyName},</p>
                  <p className="italic">{experience.companyLocation}</p>
                </td>
                <td className="px-6 py-4">{experience.description}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-5">
                    <button>
                      <UpdateIcon size={14} />
                    </button>
                    <button onClick={() => handleDelete(experience.id)}>
                      <DeleteIcon size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-rose-700">
                No work experience is added yet
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
    </section>
  );
}

export default WorkExperience;
