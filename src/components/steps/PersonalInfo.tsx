import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Person } from "../../vite-env";

import NextIcon from "remixicon-react/ArrowRightLineIcon";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/resumeContext";

function PersonalInfo() {
  const { setResumeData, resumeData, getAllByUserId, createOne } = useResume();
  const [person, setPerson] = useState<Person>({
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
  });
  const navigate = useNavigate();

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setPerson({ ...person, [ev.target.name]: ev.target.value });

  const handleSubmit = async (
    ev: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    ev.preventDefault();

    const savedData = await createOne<Person>("personal_informations", person);
    setResumeData({ ...resumeData, person: { ...savedData } });
    navigate("/resume/step/2.1");
  };

  useEffect(() => {
    getAllByUserId<Person>("personal_informations").then((data) => {
      if (data[0]) {
        setPerson({
          ...data[0],
          dateOfBirth: data[0]?.dateOfBirth.slice(0, 10),
        });
        setResumeData({
          ...resumeData,
          person: person,
        });
      }
    });
  });

  return (
    <section className="shadow-md rounded p-10">
      <article>
        <h2 className="font-medium text-sm text-gray-600">
          Personal Information
        </h2>
        <p className="text-xs text-gray-600">Mandatory Step</p>
      </article>

      <form method="post" onSubmit={handleSubmit}>
        <div className="text-sm flex items-center space-x-2 mt-6 mb-5">
          <span className="h-0.5 bg-teal-400 flex-1"></span>
          <span>Personal Details</span>
          <span className="h-0.5 bg-teal-400 flex-1"></span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="firstName"
            >
              first name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="false"
              placeholder="first name"
              onChange={handleChange}
              value={person.firstName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="middleName"
            >
              middle name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="middleName"
              id="middleName"
              autoComplete="false"
              placeholder="middle name"
              onChange={handleChange}
              value={person.middleName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="lastName"
            >
              last name
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="false"
              placeholder="last name"
              onChange={handleChange}
              value={person.lastName}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 capitalize" htmlFor="sex">
              sex
            </label>
            <select
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              name="sex"
              id="sex"
              onChange={handleChange}
              value={person.sex}
            >
              <option disabled hidden>
                Choose gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="dateOfBirth"
            >
              date of birth
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="false"
              onChange={handleChange}
              value={person.dateOfBirth}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="nationality"
            >
              nationality
            </label>
            <select
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              name="nationality"
              id="nationality"
              autoComplete="false"
              onChange={handleChange}
              value={person.nationality}
            >
              <option disabled hidden>
                Choose nationality
              </option>
              <option value="tanzania">Tanzanian</option>
              <option value="kenya">Kenyan</option>
              <option value="uganda">Uganda</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="placeOfDomicile"
            >
              place Of Domicile
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="placeOfDomicile"
              id="placeOfDomicile"
              autoComplete="false"
              placeholder="District, Region"
              onChange={handleChange}
              value={person.placeOfDomicile}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="text-sm text-gray-600 capitalize"
              htmlFor="disabilities"
            >
              disabilty (if any)
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="text"
              name="disabilities"
              id="disabilities"
              autoComplete="false"
              placeholder="Leave empty if none"
              onChange={handleChange}
              value={person.disabilities}
            />
          </div>
        </div>

        <div className="text-sm flex items-center space-x-2 mt-8 mb-5">
          <span className="h-0.5 bg-teal-400 flex-1"></span>
          <span>Contanct Details</span>
          <span className="h-0.5 bg-teal-400 flex-1"></span>
        </div>

        <div className="grid grid-cols-3 gap-y-8 gap-x-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 capitalize" htmlFor="email">
              email
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="email"
              name="email"
              id="email"
              autoComplete="false"
              placeholder="email"
              onChange={handleChange}
              value={person.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600 capitalize" htmlFor="phone">
              phone
            </label>
            <input
              className="bg-gray-100 outline-none border rounded px-2.5 py-1.5 placeholder:capitalize"
              type="tel"
              name="phone"
              id="phone"
              autoComplete="false"
              placeholder="phone"
              onChange={handleChange}
              value={person.phone}
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
              placeholder="P.O Box ..."
              onChange={handleChange}
              value={person.address}
            />
          </div>
        </div>

        <div className="mt-16">
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

export default PersonalInfo;
