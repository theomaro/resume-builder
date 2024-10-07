import { Link } from "react-router-dom";

import PhoneIcon from "remixicon-react/PhoneFillIcon";
import EmailIcon from "remixicon-react/MailLineIcon";
import AddressIcon from "remixicon-react/Message2LineIcon";
import { useResume } from "../../context/resumeContext";

function Review() {
  const {
    resumeData: {
      person,
      academics,
      professions,
      experiences,
      skills,
      references,
      summary,
    },
  } = useResume();

  const personalSkills = skills.filter(
    (skill) => skill.category === "personal"
  );
  const professionalSkills = skills.filter(
    (skill) => skill.category === "personal"
  );

  return (
    <section className="shadow-md rounded-b pt-10">
      <article className="px-10 mb-8">
        <h2 className="font-medium text-sm text-gray-600">
          Review Your Resume
        </h2>
        <p className="text-xs text-gray-600">Mandatory Step</p>
      </article>

      <div className="bg-red-50 px-10 py-8">
        <article className="flex flex-col">
          <h1 className="text-3xl font-bold">
            {person.firstName + " " + person.lastName}
          </h1>
          <div className="flex items-center text-sm space-x-16">
            <p>{summary.position}</p>
            <span className="h-[0.5px] mt-1 bg-slate-400 flex-1"></span>
          </div>
          <div className="flex ms-40 my-2 justify-between items-center">
            <div className="flex items-center space-x-2 text-sm">
              <div className="border-b-2 border-black pb-1">
                <PhoneIcon size={23} />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <p className="font-semibold">Phone</p>
                <Link target="_blank" to={`tel:${person.phone}`}>
                  {person.phone}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="border-b-2 border-black pb-1">
                <EmailIcon size={23} />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <p className="font-semibold">Email</p>
                <Link target="_blank" to={`mailto:${person.email}`}>
                  {person.email}
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="border-b-2 border-black pb-1">
                <AddressIcon size={23} />
              </div>
              <div className="flex flex-col -space-y-0.5">
                <p className="font-semibold">Address</p>
                <p>{person.address}</p>
              </div>
            </div>
          </div>
        </article>

        <article className="flex mt-8">
          <div className="basis-[19%]">
            <h2 className="font-semibold mb-0.5">Personal Details</h2>
            <span className="border border-dashed border-slate-400 flex w-1/4"></span>
          </div>

          <ul className="flex-1 space-y-1.5">
            <li className="flex space-x-6 text-sm">
              <span className="font-medium w-32">Nationality:</span>
              <span>{person.nationality}</span>
            </li>
            <li className="flex space-x-6 text-sm">
              <span className="font-medium w-32">Place of Domicile:</span>
              <span>{person.placeOfDomicile}</span>
            </li>
            <li className="flex space-x-6 text-sm">
              <span className="font-medium w-32">Date of Birth:</span>
              <span>{person.dateOfBirth}</span>
            </li>
            <li className="flex space-x-6 text-sm">
              <span className="font-medium w-32">Sex:</span>
              <span>{person.sex}</span>
            </li>
            <li className="flex space-x-6 text-sm">
              <span className="font-medium w-32">disability:</span>
              <span>{person.disabilities}</span>
            </li>
          </ul>
        </article>

        <article className="flex mt-8">
          <div className="basis-[19%]">
            <h2 className="font-semibold mb-0.5">Work Experience</h2>
            <span className="border border-dashed border-slate-400 flex w-1/4"></span>
          </div>

          <ul className="flex-1 space-y-5">
            {experiences.map((experience) => (
              <li key={experience.id} className="flex space-x-12">
                <div className="-space-y-0.5 text-sm">
                  <p className="font-medium">{experience.year}</p>
                  <p className="font-light italic">{experience.companyName}</p>
                  <p className="font-light italic">
                    {experience.companyLocation}
                  </p>
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-1">
                    {experience.jobTitle}
                  </h3>
                  <p className="text-sm flex-1">{experience.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex mt-8">
          <div className="basis-[19%]">
            <h2 className="font-semibold mb-0.5">
              Education <br /> Background
            </h2>
            <span className="border border-dashed border-slate-400 flex w-1/4"></span>
          </div>

          <ul className="flex-1 space-y-4">
            {academics.map((academic) => (
              <li
                key={academic.id}
                className="flex space-x-2 text-sm border-t pt-1"
              >
                <p className="font-medium basis-36">{academic.year}</p>

                <div className="-space-y-0.5 basis-56">
                  <h3 className="font-medium">{academic.schoolName}</h3>
                  <p className="font-light italic">{academic.schoolLocation}</p>
                </div>

                <p className=" flex-1">{academic.award}</p>
              </li>
            ))}

            {professions.map((profession) => (
              <li
                key={profession.id}
                className="flex space-x-2 text-sm border-t pt-1"
              >
                <p className="font-medium basis-36">{profession.year}</p>

                <div className="-space-y-0.5 basis-56">
                  <h3 className="font-medium">{profession.institutionName}</h3>
                  <p className="font-light italic">
                    {profession.institutionLocation}
                  </p>
                </div>

                <p className=" flex-1">"{profession.award}"</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="flex mt-8">
          <div className="basis-[19%]">
            <h2 className="font-semibold mb-0.5">Skills</h2>
            <span className="border border-dashed border-slate-400 flex w-1/4"></span>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-x-16">
            <div>
              <h4 className="text-sm font-medium border-b border-slate-400 pb-1 mb-5 w-fit">
                Personal
              </h4>

              <ul>
                {personalSkills.map((personalSkill) => (
                  <li
                    key={personalSkill.id}
                    className="grid grid-cols-3 items-center space-x-3"
                  >
                    <h5 className="col-span-1 text-sm">
                      {personalSkill.skillName}
                    </h5>
                    <div className="col-span-2 bg-stone-200 h-1 mt-0.5 w-full rounded-full">
                      <div
                        className={`bg-teal-400 h-full w-[${personalSkill.proficiency}%]`}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium border-b border-slate-400 pb-1 mb-5 w-fit">
                Professional
              </h4>

              <ul>
                {professionalSkills.map((professionalSkill) => (
                  <li
                    key={professionalSkill.id}
                    className="grid grid-cols-3 items-center space-x-3"
                  >
                    <h5 className="col-span-1 text-sm">
                      {professionalSkill.skillName}
                    </h5>
                    <div className="col-span-2 bg-stone-200 h-1 mt-0.5 w-full rounded-full">
                      <div
                        className={`bg-teal-400 h-full w-[${professionalSkill.proficiency}%]`}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="flex mt-8 font-light">
          <div className="basis-[19%]">
            <h2 className="font-semibold mb-0.5">References</h2>
            <span className="border border-dashed border-slate-400 flex w-1/4"></span>
          </div>

          <ul className="flex-1 grid grid-cols-3">
            {references.map((referee) => (
              <li key={referee.id} className="text-sm flex flex-col">
                <h4 className="font-medium">{referee.fullName}</h4>
                <h5 className="font-normal">{referee.position}</h5>
                <p>{referee.company}</p>
                <p>{referee.address}</p>
                <Link
                  target="_blank"
                  className="w-fit"
                  to={`tel:${referee.phone}`}
                >
                  {referee.phone}
                </Link>
                <Link
                  target="_blank"
                  className="w-fit"
                  to={`mailto:${referee.email}`}
                >
                  {referee.email}
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Review;
