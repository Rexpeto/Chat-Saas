import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Chat, PdfViewer } from "./components";

interface PageProps {
  params: {
    fileid: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { fileid } = params;

  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.email)
    redirect(`/auth-callback?origin=dashboard/${fileid}`);

  const file = await db.file.findFirst({
    where: {
      id: fileid,
      userId: user.id,
    },
  });

  if (!file) redirect("/dashboard");

  return (
    <div className="flex flex-col flex-1 justify-between h-[calc(100vh-3.5rem)]">
      <div className="grow lg:flex xl:px-2 mx-auto max-w-8xl w-full">
        {/* left side */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 lg:pl-8 xl:flex-1 xl:pl-6">
            <PdfViewer url={file.url} />
          </div>
        </div>

        <div className="shrink-0 flex-[0.75] border-t lg:border-l lg:border-t-0 border-gray-300 dark:border-gray-800 lg:w-96">
          <Chat fileId={file.id} />
        </div>
      </div>
    </div>
  );
};

export default Page;
