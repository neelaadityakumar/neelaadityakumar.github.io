function CustomH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-AAsecondary text-3xl md:text-4xl font-bold">
      {children}
    </h1>
  );
}
function CustomH2({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-AAsecondary text-2xl md:text-3xl font-bold">
      {children}
    </h1>
  );
}
function CustomP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
  );
}
function CustomStrong({ children }: { children: React.ReactNode }) {
  return (
    <strong className="text-gray-200 font-[800] dark:text-gray-300 leading-relaxed">
      {children}
    </strong>
  );
}

function CustomCode({ children }: { children: React.ReactNode }) {
  return <code className="text-AAsecondary px-2 py-1 rounded">{children}</code>;
}

function CustomUl({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 text-gray-400 dark:text-gray-300 space-y-2">
      {children}
    </ul>
  );
}

function CustomOl({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal pl-6 text-gray-400 dark:text-gray-300 space-y-2">
      {children}
    </ol>
  );
}

function CustomLi({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-gray-400 dark:text-gray-300 leading-relaxed">
      {children}
    </li>
  );
}

function CustomImage({ src, alt }: { src: string; alt: string }) {
  return <img className="w-full max-w-lg mx-auto my-4" src={src} alt={alt} />;
}

function CustomVideo({ src, title }: { src: string; title: string }) {
  return (
    <video className="w-full max-w-lg mx-auto my-4" controls>
      <source src={src} type="video/mp4" />
      {title}
    </video>
  );
}

export const overrideComponents = {
  h1: CustomH1,
  p: CustomP,
  code: CustomCode,
  ul: CustomUl,
  ol: CustomOl,
  li: CustomLi,
  img: CustomImage,
  video: CustomVideo,
  strong: CustomStrong,
  h2: CustomH2,
};
