import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Skill } from "../../vite-env";

import PreviewIcon from "remixicon-react/EyeLineIcon";
import DeleteIcon from "remixicon-react/DeleteBin2LineIcon";
import UpdateIcon from "remixicon-react/PencilLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useResume } from "../../context/resumeContext";

function Skills() {
  const { resumeData, setResumeData, createOne, deleteOne, getAllByUserId } =
    useResume();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skill, setSkill] = useState<Skill>({
    id: "",
    category: "personal",
    skillName: "",
    proficiency: 0,
    certificate: "",
    userId: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setSkill({ ...skill, [ev.target.name]: ev.target.value });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const savedData = await createOne<Skill>("skills", skill);
    setSkills([savedData, ...skills]);
  };

  const handleDelete = async (id: string): Promise<void> => {
    const isDeleted = await deleteOne("skills", id);
    if (isDeleted)
      getAllByUserId<Skill>("skills").then((data) => setSkills([...data]));
  };

  const handleNext = (): void => navigate("/resume/step/5");

  useEffect(() => {
    getAllByUserId<Skill>("skills").then((data) => {
      setSkills([...data]);
      setResumeData({
        ...resumeData,
        skills: skills,
      });
    });
  });

  return (
    <section className="shadow-md rounded-b p-10">
      <article>
        <h2 className="font-medium text-sm text-gray-600">Skills</h2>
        <p className="text-xs text-gray-600">Mandatory Step</p>
      </article>

      <form method="post" onSubmit={handleSubmit}>
        <div className="text-sm flex items-center space-x-2 mt-6 mb-5">
          <span className="h-0.5 bg-teal-400 flex-1"></span>
          <span>New Skill</span>
          <span className="h-0.5 bg-teal-400 flex-1"></span>
        </div>

        <div className="grid grid-cols-3 gap-y-8 gap-x-8">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="category"
            >
              category
            </label>
            <select
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              name="category"
              id="category"
              onChange={handleChange}
              value={skill.category}
            >
              <option value="personal">Personal</option>
              <option value="professional">Professional</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="skillName"
            >
              skill name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize"
              autoComplete="true"
              type="text"
              name="skillName"
              id="skillName"
              placeholder="Communication Skills"
              onChange={handleChange}
              value={skill.skillName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="proficiency"
            >
              proficiency
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={0}
                step={5}
                max={100}
                className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 text-sm placeholder:capitalize flex-1"
                autoComplete="true"
                name="proficiency"
                id="proficiency"
                onChange={handleChange}
                value={skill.proficiency}
              />

              <p>{skill.proficiency}%</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="certificate"
            >
              Certificate (if any)
            </label>

            <input
              className="font-medium text-sm text-gray-500 bg-gray-100 rounded cursor-pointer file:cursor-pointer file:border-0 file:py-1.5 file:px-2.5 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white placeholder:capitalize"
              autoComplete="true"
              type="file"
              name="certificate"
              id="certificate"
              placeholder="upload certificate"
              onChange={handleChange}
              value={skill.certificate}
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
        <span>Skills</span>
        <span className="h-0.5 bg-teal-400 flex-1"></span>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-4">Skill Name</th>
            <th className="px-6 py-4">Proficiency (%)</th>
            <th className="px-6 py-4">Certification</th>
            <th className="px-6 py-4 sr-only">Action</th>
          </tr>
        </thead>

        <tbody>
          {skills.length ? (
            skills.map((skill) => (
              <tr
                key={skill.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <td className="px-6 py-4">{skill.skillName}</td>
                <td className="px-6 py-4">{skill.proficiency}</td>
                <td className="px-6 py-4">
                  <button className="flex space-x-2">
                    <PreviewIcon size={14} />
                    <span className="text-xs underline decoration-dotted">
                      Certificate
                    </span>
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-5">
                    <button>
                      <UpdateIcon size={14} />
                    </button>
                    <button onClick={() => handleDelete(skill.id)}>
                      <DeleteIcon size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-rose-700">No skill is added yet</td>
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

export default Skills;
