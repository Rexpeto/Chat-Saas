import { Files, UploadButton } from ".";

const Dashboard = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-10 md:py-3">
      <div className="flex justify-between items-center gap-3 mt-8 pb-3 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold  text-gray-900 dark:text-white">
          My Files
        </h1>

        <UploadButton />
      </div>

      <Files />
    </main>
  );
};

export default Dashboard;
