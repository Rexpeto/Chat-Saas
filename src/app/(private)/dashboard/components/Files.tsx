"use client";

import { trpc } from "@/app/_trpc/client";
import { GetIcons } from "@/components";
import FileCard from "./FileCard";

const Files = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return files && files.length !== 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 divide-zinc-200 dark:divide-zinc-700">
      {files
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
    </div>
  ) : isLoading ? (
    <div className="w-full mt-24 flex justify-center">
      <GetIcons
        icon="ImSpinner2"
        className="animate-spin text-4xl text-blue-600"
      />
    </div>
  ) : (
    <div className="flex flex-col items-center gap-2 mt-16">
      <GetIcons
        icon="GiGhost"
        className="text-6xl text-gray-600 animate-floating"
      />
      <h3 className="font-semibold text-xl">
        Casper, you don&apos;t have any files
      </h3>
      <p className="font-semibold">Let&apos;s upload your first PDF.</p>
    </div>
  );
};

export default Files;
