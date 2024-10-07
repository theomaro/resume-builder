import { FormEvent, useEffect, useState } from "react";
import { Reference } from "../../vite-env";

import DeleteIcon from "remixicon-react/DeleteBin2LineIcon";
import UpdateIcon from "remixicon-react/PencilLineIcon";
import AddIcon from "remixicon-react/AddLineIcon";
import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/resumeContext";

function Referees() {
  const { resumeData, setResumeData, createOne, deleteOne, getAllByUserId } =
    useResume();
  const [references, setReferences] = useState<Reference[]>([]);
  const [reference, setReference] = useState<Reference>({
    id: "",
    fullName: "",
    position: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    userId: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setReference({ ...reference, [ev.target.name]: ev.target.value });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const savedData = await createOne<Reference>("references", reference);
    setReferences([savedData, ...references]);
  };

  const handleDelete = async (id: string): Promise<void> => {
    const isDeleted = await deleteOne("references", id);
    if (isDeleted)
      getAllByUserId<Reference>("references").then((data) =>
        setReferences([...data])
      );
  };

  const handleNext = (): void => navigate("/resume/step/6");

  useEffect(() => {
    getAllByUserId<Reference>("references").then((data) => {
      setReferences([...data]);
      setResumeData({
        ...resumeData,
        references: references,
      });
    });
  });

  return (
    <section className="shadow-md rounded-b p-10">
      <article>
        <h2 className="font-medium text-sm text-gray-600">Referees</h2>
        <p className="text-xs text-gray-600">Mandatory Step</p>
      </article>

      <form method="post" onSubmit={handleSubmit}>
        <div className="text-sm flex items-center space-x-2 mt-6 mb-5">
          <span className="h-0.5 bg-teal-400 flex-1"></span>
          <span>New Referee</span>
          <span className="h-0.5 bg-teal-400 flex-1"></span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="fullName"
            >
              full name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="false"
              placeholder="full name"
              onChange={handleChange}
              value={reference.fullName}
            />
          </div>
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
              value={reference.position}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="company"
            >
              company
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="company"
              id="company"
              autoComplete="false"
              placeholder="company"
              onChange={handleChange}
              value={reference.company}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 capitalize" htmlFor="email">
              email
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="email"
              id="email"
              autoComplete="false"
              placeholder="email"
              onChange={handleChange}
              value={reference.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 capitalize" htmlFor="phone">
              phone
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="phone"
              id="phone"
              autoComplete="false"
              placeholder="phone"
              onChange={handleChange}
              value={reference.phone}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="address"
            >
              address
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="address"
              id="address"
              autoComplete="false"
              placeholder="address"
              onChange={handleChange}
              value={reference.address}
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

      <div className="flex items-center text-sm space-x-2 mt-6 mb-5 ">
        <span className="h-0.5 bg-teal-400 flex-1"></span>
        <span>Referees</span>
        <span className="h-0.5 bg-teal-400 flex-1"></span>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-4">Full name</th>
            <th className="px-6 py-4">Position</th>
            <th className="px-6 py-4">Company</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Phone</th>
            <th className="px-6 py-4">Address</th>
            <th className="px-6 py-4 sr-only">Action</th>
          </tr>
        </thead>

        <tbody>
          {references.length ? (
            references.map((referee) => (
              <tr
                key={referee.id}
                className="odd:bg-white even:bg-gray-50 border-b"
              >
                <td className="px-6 py-4">{referee.fullName}</td>
                <td className="px-6 py-4">{referee.position}</td>
                <td className="px-6 py-4">{referee.company}</td>
                <td className="px-6 py-4">{referee.email}</td>
                <td className="px-6 py-4">{referee.phone}</td>
                <td className="px-6 py-4">{referee.address}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-5">
                    <button>
                      <UpdateIcon size={14} />
                    </button>
                    <button onClick={() => handleDelete(referee.id)}>
                      <DeleteIcon size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-nowrap text-rose-700">
                No referee is added yet
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

export default Referees;
