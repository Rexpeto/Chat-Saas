"use client";

import { trpc } from "@/app/_trpc/client";
import { GetIcons } from "@/components";

const Files = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return files && files.length !== 0 ? (
    <div></div>
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
