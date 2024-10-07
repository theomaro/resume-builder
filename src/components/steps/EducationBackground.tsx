import { ReactNode } from "react";

function EducationBackground({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="shadow-md rounded-b p-10">
        <article>
          <h2 className="font-medium text-sm text-gray-600">
            Education Background
          </h2>
          <p className="text-xs text-gray-600">Mandatory Step</p>
        </article>

        {children}
      </section>
    </>
  );
}

export default EducationBackground;
