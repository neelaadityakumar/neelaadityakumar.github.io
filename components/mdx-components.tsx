function CustomH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-AAsecondary text-3xl md:text-4xl font-bold">
      {children}
    </h1>
  );
}

function CustomH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-AAsecondary text-2xl md:text-3xl font-bold">
      {children}
    </h2>
  );
}

function CustomH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-AAsecondary text-xl md:text-2xl font-semibold">
      {children}
    </h3>
  );
}

function CustomH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-AAsecondary text-lg md:text-xl font-medium">
      {children}
    </h4>
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
    <strong className="text-gray-200 font-extrabold dark:text-gray-300 leading-relaxed">
      {children}
    </strong>
  );
}

function CustomCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-AAsecondary rounded-xl  px-2 py-1">{children}</code>
  );
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Custom unordered list component that applies consistent styling
 * for list items. It uses Tailwind CSS classes to set the list style
 * to disc, padding, and text color for both light and dark themes.
 *
 * @param children - The content to be displayed inside the list.
 */
/******  5ab103d3-b2c8-4ba5-9eb4-93e7ca4b2528  *******/ function CustomUl({
  children,
}: {
  children: React.ReactNode;
}) {
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
  return (
    <img
      className="w-full max-w-lg mx-auto my-4 rounded-lg shadow-lg"
      src={src}
      alt={alt}
    />
  );
}

function CustomVideo({ src, title }: { src: string; title: string }) {
  return (
    <video
      className="w-full max-w-lg mx-auto my-4 rounded-lg shadow-lg"
      controls
    >
      <source src={src} type="video/mp4" />
      {title}
    </video>
  );
}

export const overrideComponents = {
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  p: CustomP,
  strong: CustomStrong,
  code: CustomCode,
  ul: CustomUl,
  ol: CustomOl,
  li: CustomLi,
  img: CustomImage,
  video: CustomVideo,
};
