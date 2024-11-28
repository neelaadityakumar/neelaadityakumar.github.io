function CustomH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-AAsecondary text-3xl md:text-4xl font-bold">
      {children}
    </h1>
  );
}

function CustomP({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-blue-700 dark:text-gray-300 leading-relaxed">
      {children}
    </p>
  );
}

function CustomCode({ children }: { children: React.ReactNode }) {
  return (
    <code className=" text-AAsecondary px-2 py-1 rounded">{children}</code>
  );
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

export const overrideComponents = {
  h1: CustomH1,
  p: CustomP,
  code: CustomCode,
  ul: CustomUl,
  ol: CustomOl,
  li: CustomLi,
};
