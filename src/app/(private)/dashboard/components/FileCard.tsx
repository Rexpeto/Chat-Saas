import { GetIcons } from "@/components";
import Link from "next/link";
import { Button } from "@/components/ui";
import { trpc } from "@/app/_trpc/client";
import { useState } from "react";

const FileCard = ({ file }: any) => {
  const [currentlyDeleting, setCurrentlyDeleting] = useState<string | null>(
    null,
  );

  const utils = trpc.useContext();

  const { mutate: deleteFile } = trpc.deleteFile.useMutation({
    onSuccess: () => {
      utils.getUserFiles.invalidate();
    },
    onMutate: ({ id }) => {
      setCurrentlyDeleting(id);
    },
    onSettled: () => {},
  });

  return (
    <div className="col-span-1 divide-y divide-gray-200 dark:divide-gray-700 rounded-lg bg-gray-200/60 dark:bg-gray-800 shadow hover:shadow-lg transition duration-200">
      <Link href={`/dashboard/${file.id}`} className="flex flex-col gap-2">
        <div className="flex justify-between items-center space-x-6 px-6 pt-6">
          <div className="flex flex-shrink-0 justify-center items-center h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500">
            <GetIcons icon="ImFilePdf" className="text-white" />
          </div>

          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-lg font-medium truncate capitalize">
                {file.name}
              </h3>
            </div>
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-3 place-items-center gap-6 px-6 py-2 mt-2 text-sm">
        <div className="flex items-center gap-2 text-zinc-500">
          <GetIcons icon="MdOutlineAdd" />
          {new Date(file.createdAt).toLocaleDateString("en-US", {
            timeZone: "UTC",
          })}
        </div>

        <div className="flex items-center gap-2 text-zinc-500">
          <GetIcons icon="LuMessagesSquare" />5
        </div>

        <Button
          onClick={() => deleteFile({ id: file.id })}
          className="w-full"
          size="sm"
          variant="destructive"
        >
          {currentlyDeleting === file.id ? (
            <GetIcons icon="ImSpinner2" className="animate-spin text-white" />
          ) : (
            <GetIcons icon="PiTrashLight" className="text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default FileCard;
