import { Link } from "react-router-dom";
import Footer from "../components/ui/Footer";
import NewsLetter from "../components/ui/NewsLetter";

function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <section className="px-12 py-20 flex">
          <article className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold max-w-md">
                Build Your Professional Resume in Minutes
              </h2>
              <p className="text-lg max-w-md leading-snug">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur deserunt dolorum cumque?
              </p>
            </div>

            <button>
              <Link
                to="/resume"
                className="border border-teal-700 rounded-lg font-medium px-8 py-2 text-nowrap text-center block"
              >
                Get Started
              </Link>
            </button>
          </article>

          <article>
            <img src="" alt="" className="" />
          </article>
        </section>

        <section className="px-12 py-10 space-y-8">
          <div>
            <h2 className="text-2xl text-center font-medium">How it works</h2>
            <p className="text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
              beatae?
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="flex items-center flex-nowrap gap-2">
                <span className="w-8 h-8 rounded-full border flex items-center justify-center">
                  1
                </span>
                <h3 className="font-medium">Create Account</h3>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="flex items-center flex-nowrap gap-2">
                <span className="w-8 h-8 rounded-full border flex items-center justify-center">
                  2
                </span>
                <h3 className="font-medium">Pick a Template</h3>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="flex items-center flex-nowrap gap-2">
                <span className="w-8 h-8 rounded-full border flex items-center justify-center">
                  3
                </span>
                <h3 className="font-medium">Customization</h3>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="flex items-center flex-nowrap gap-2">
                <span className="w-8 h-8 rounded-full border flex items-center justify-center">
                  4
                </span>
                <h3 className="font-medium">Review & Download</h3>
              </div>
            </article>
          </div>
        </section>

        <section className="px-12 py-10 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-center font-medium">Newest</h2>
            <button>
              <a
                href="/templates"
                className="underline hover:text-teal-700 hover:no-underline"
              >
                View All
              </a>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 1</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 2</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 3</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 4</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 5</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 6</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>

            <article className="shadow-md rounded-xl p-8 hover:shadow">
              <div className="space-y-4">
                <h3 className="font-medium">Template 7</h3>
                <button className="border border-teal-700 rounded-lg font-medium px-3.5 py-1.5 text-sm text-nowrap text-center">
                  Choose this template
                </button>
              </div>
            </article>
          </div>
        </section>

        <section className="px-12 py-10 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl text-center font-medium">What They Say</h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <article className="shadow rounded-xl hover:shadow">
              <img src="" alt="" />
              <div className="p-6 space-y-1">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  repudiandae.
                </p>
                <h3 className="font-semibold italic text-end">- Jon Doe</h3>
              </div>
            </article>

            <article className="shadow rounded-xl hover:shadow">
              <img src="" alt="" />
              <div className="p-6 space-y-1">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Inventore, numquam.
                </p>
                <h3 className="font-semibold italic text-end">- Jon Doe</h3>
              </div>
            </article>

            <article className="shadow rounded-xl hover:shadow">
              <img src="" alt="" />
              <div className="p-6 space-y-1">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis, mollitia!
                </p>
                <h3 className="font-semibold italic text-end">- Jon Doe</h3>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer>
        <NewsLetter />
      </Footer>
    </>
  );
}

export default Home;
