import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Head from "next/head";
import Skills from "../components/Skills";
import ArrowIcon from "../components/Icons/ArrowIcon";

const meta = {
  title: "Aditya Kumar - Software Engineer",
  description: `I've been working on Software development for 3+ years. Get in touch with me to know more.`,
  image: "/titofCercle.png",
  type: "website",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://neelaadityakumar.github.io/`}
        />
        <link rel="canonical" href={`https://neelaadityakumar.github.io/`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aditya Kumar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className="relative snap-mandatory min-h-screen w-full ">
        <Header />
        <MyName />
        <AboutMe />
        <Skills />
        <WhereIHaveWorked /> {/* <SomethingIveBuilt /> */}
        <div className="flex flex-col space-y-4 w-full pb-16 items-center ">
          {" "}
          <div className="flex flex-row items-center ">
            <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
            <div className="flex flex-row space-x-2 items-center">
              <span className="text-AAsecondary font-sans text-sm  sm:text-base">
                {" "}
                03.
              </span>
              <span className=" font-sans text-AAsecondary text-base">
                What&apos;s Next?
              </span>
            </div>
          </div>{" "}
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
