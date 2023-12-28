"use client";

import { Messages, buttonVariants } from "@/components/ui";
import { ChatInput } from ".";
import { trpc } from "@/app/_trpc/client";
import { GetIcons } from "@/components";
import Link from "next/link";

interface Props {
  fileId: string;
}

const Chat = ({ fileId }: Props) => {
  const { data, isLoading } = trpc.getFileStatus.useQuery(
    { fileId },
    {
      refetchInterval: (data) =>
        data?.status === "Success" || data?.status === "Error" ? false : 500,
    },
  );

  // Loading case
  if (isLoading)
    return (
      <div className="relative flex flex-col justify-beetween min-h-full bg-zinc-50 dark:bg-zinc-900 divide-x divide-zinc-200 dark:divide-zinc-700">
        <div className="flex flex-col justify-center items-center flex-1 gap-2">
          <GetIcons
            icon="ImSpinner2"
            className="animate-spin text-4xl text-blue-600"
          />
          <h3 className="font-semibold text-lg">Loading...</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            We&apos;re preparing your PDF.
          </p>
        </div>

        <ChatInput isDisabled />
      </div>
    );

  // Processing case
  if (data?.status === "Processing")
    return (
      <div className="relative flex flex-col justify-beetween min-h-full bg-zinc-50 dark:bg-zinc-900 divide-x divide-zinc-200 dark:divide-zinc-700">
        <div className="flex flex-col justify-center items-center flex-1 gap-2">
          <GetIcons
            icon="ImSpinner2"
            className="animate-spin text-4xl text-blue-600"
          />
          <h3 className="font-semibold text-lg">Proccessing...</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            This won&apos;t take long.
          </p>
        </div>

        <ChatInput isDisabled />
      </div>
    );

  // Error case
  if (data?.status === "Error")
    return (
      <div className="relative flex flex-col justify-beetween min-h-full bg-zinc-50 dark:bg-zinc-900 divide-x divide-zinc-200 dark:divide-zinc-700">
        <div className="flex flex-col justify-center items-center flex-1 gap-2">
          <GetIcons
            icon="MdCancelPresentation"
            className="text-4xl text-red-600"
          />
          <h3 className="font-semibold text-lg">Too many pages in PDF.</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Your <span className="font-medium">Free</span> plan supports up to 5
            pages per PDF.
          </p>
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "secondary",
              className: "flex items-center gap-2",
            })}
          >
            <GetIcons icon="MdArrowBackIos" className="text-xs" />
            Back
          </Link>
        </div>

        <ChatInput isDisabled />
      </div>
    );

  return (
    <div className="relative flex flex-col justify-between gap-2 min-h-full bg-zinc-50 dark:bg-zinc-900 divide-x divide-zinc-200 dark:divide-zinc-700">
      <div className="flex flex-col justify-between flex-1 mb-28">
        <Messages />
      </div>

      <ChatInput />
    </div>
  );
};

export default Chat;
