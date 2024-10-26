import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Skills from "../components/Skills";
import Blog from "../components/blog";

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);

  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
    setTimeout(() => {
      setShowElement(true);
    }, 4500);

    setTimeout(() => {
      setShowElement(false);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
    setIsClient(true);
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Aditya Kumar - Software Engineer",
    description: `I've been working on Software development for 3+ years. Get in touch with me to know more.`,
    image: "/titofCercle.png",
    type: "website",
  };

  const mockBlogs: Array<any> = [
    {
      id: 1,
      cover_image: "/static/images/Medikabazaar-feature-image.png",
      published_at: "2024-10-01T10:30:00Z",
      public_reactions_count: 120,
      comments_count: 15,
      url: "https://example.com/blog-post-1",
      title: "Ecommerce website with Next.js",
      reading_time_minutes: 5,
      description:
        "Explore the latest techniques and best practices in React for building high-performance web applications...",
    },
    {
      id: 2,
      cover_image: "/static/images/Medikabazaar-feature-image-ae.png",
      published_at: "2024-09-25T14:00:00Z",
      public_reactions_count: 85,
      comments_count: 20,
      url: "https://example.com/blog-post-2",
      title: "How to build a website with multi language/currency support",
      reading_time_minutes: 3,
      description:
        "Uncover key CSS strategies to give your website a polished and modern look. From Flexbox to grid layouts...",
    },
    {
      id: 3,
      cover_image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de1ded3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGphdmFzY3JpcHR8ZW58MHx8fHwxNjk4MzU2MzAx&ixlib=rb-1.2.1&q=80&w=1080",
      published_at: "2024-09-15T08:45:00Z",
      public_reactions_count: 200,
      comments_count: 30,
      url: "https://example.com/blog-post-3",
      title:
        "How to convert your existing website to android & ios app in 10 mins",
      reading_time_minutes: 6,
      description:
        "A deep dive into the latest additions to JavaScript in 2024. Learn about new features, enhancements, and how to leverage them...",
    },
    {
      id: 4,
      cover_image:
        "https://images.unsplash.com/photo-1606312619132-b58cded4c3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG5leHRqc3xlbnwwfHx8fDE2OTgzNTYzMDE&ixlib=rb-1.2.1&q=80&w=1080",
      published_at: "2024-08-10T16:20:00Z",
      public_reactions_count: 45,
      comments_count: 5,
      url: "https://example.com/blog-post-4",
      title: "Performance Optimizion for  Next.js Applications",
      reading_time_minutes: 4,
      description:
        "Learn the best practices for optimizing your Next.js applications, from lazy loading images to server-side rendering...",
    },
  ];
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header
          finishedLoading={context.sharedState.finishedLoading}
          sectionsRef={homeRef}
        />
        <MyName finishedLoading={context.sharedState.finishedLoading} />

        <AboutMe ref={aboutRef} />

        <Skills />
        <WhereIHaveWorked />
        <Blog blogs={mockBlogs} />

        <GetInTouch />
      </div>
    </>
  );
}
