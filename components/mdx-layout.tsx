import React from "react";

export default function MdxLayout({
  header = "",
  subheader = "",
  children,
}: {
  header?: string;
  subheader?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-AAtertiary dark:bg-AAtertiary dark:text-AAsecondary p-6">
      <header className="text-center mb-12">
        {header && (
          <h1 className="text-AAsecondary font-bold text-4xl md:text-6xl">
            {header}
          </h1>
        )}
        {subheader && (
          <p className="text-gray-400 dark:text-gray-300 text-lg mt-4">
            {subheader}
          </p>
        )}
      </header>
      <main className="max-w-5xl mx-auto prose dark:prose-invert">
        {children}
      </main>
    </div>
  );
}
