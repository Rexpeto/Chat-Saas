import Link from "next/link";

const Steps = () => {
  return (
    <ol className="m-8 space-y-4 md:space-y-0 md:space-x-12 md:flex">
      <li className="md:flex-1">
        <div className="flex flex-col py-2 pl-4 md:pl-0 md:pb-0 md:pt-4 space-y-2 border-1-4 md:border-1-0 md:border-t-2 border-zinc-300 dark:border-zinc-700 rounded-xl">
          <span className="font-medium text-sm text-blue-600">Step 1</span>
          <span className="text-xl font-semibold  dark:text-white">
            Sign up for an account
          </span>
          <span className="mt-2 text-gray-600 dark:text-gray-300">
            Either starting out with a free plan or choose our
            <Link className="ml-1 text-blue-700" href="/pricing">
              pro plan
            </Link>
          </span>
        </div>
      </li>

      <li className="md:flex-1">
        <div className="flex flex-col py-2 pl-4 md:pl-0 md:pb-0 md:pt-4 space-y-2 border-1-4 md:border-1-0 md:border-t-2 border-zinc-300 dark:border-zinc-700 rounded-xl">
          <span className="font-medium text-sm text-blue-600">Step 2</span>
          <span className="text-xl font-semibold  dark:text-white">
            Upload your PDF files
          </span>
          <span className="mt-2 text-gray-600 dark:text-gray-300">
            We&apos;ll process your files and make it ready for you to chat
            with.
          </span>
        </div>
      </li>

      <li className="md:flex-1">
        <div className="flex flex-col py-2 pl-4 md:pl-0 md:pb-0 md:pt-4 space-y-2 border-1-4 md:border-1-0 md:border-t-2 border-zinc-300 dark:border-zinc-700 rounded-xl">
          <span className="font-medium text-sm text-blue-600">Step 3</span>
          <span className="text-xl font-semibold  dark:text-white">
            Start asking questions
          </span>
          <span className="mt-2 text-gray-600 dark:text-gray-300">
            It&apos;s that simple. Try out Vyper today - it really takes less
            than a minute.
          </span>
        </div>
      </li>
    </ol>
  );
};

export default Steps;
