import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Summary } from "../../vite-env";

import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/resumeContext";

function ProfessionalSummary() {
  const { resumeData, setResumeData, createOne, getAllByUserId } = useResume();
  const [summary, setSummary] = useState<Summary>({
    id: "",
    position: "",
    description: "",
    userId: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setSummary({ ...summary, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = async (
    ev: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();

    const savedData = await createOne<Summary>("summaries", summary);
    setResumeData({ ...resumeData, summary: { ...savedData } });
    navigate("/resume/step/7");
  };

  useEffect(() => {
    getAllByUserId<Summary>("summaries").then((data) => {
      if (data[0]) {
        setSummary({
          ...data[0],
        });
        setResumeData({
          ...resumeData,
          summary: summary,
        });
      }
    });
  });

  return (
    <section className="shadow-md rounded-b p-10">
      <article>
        <h2 className="font-medium text-sm text-gray-600">Summary</h2>
        <p className="text-xs text-gray-600">Mandatory Step</p>
      </article>

      <form method="post" onSubmit={handleSubmit}>
        <div className="text-sm flex items-center space-x-2 mt-6 mb-5">
          <span className="h-0.5 bg-teal-400 flex-1"></span>
          <span>Professional Summary</span>
          <span className="h-0.5 bg-teal-400 flex-1"></span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="position"
            >
              position
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="position"
              id="position"
              autoComplete="false"
              placeholder="position"
              onChange={handleChange}
              value={summary.position}
            />
          </div>
          <div className="col-span-3 flex flex-col gap-1">
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
              value={summary.description}
            ></textarea>
          </div>
        </div>

        <div className="mt-16 flex items-center">
          <button
            type="submit"
            className="rounded-e font-medium px-3.5 py-1.5 text-sm text-nowrap text-center flex items-center space-x-2 bg-teal-600 text-gray-200"
          >
            <span>Next</span>
            <NextIcon size={16} />
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProfessionalSummary;
