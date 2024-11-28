export default function MdxLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <div className="prose dark:prose-dark max-w-none mx-auto">{children}</div>
    </div>
  );
}
