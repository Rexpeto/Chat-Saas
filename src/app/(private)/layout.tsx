import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Chat Vyper",
    template: "%s | Chat Vyper",
  },
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return <>{children}</>;
};

export default Layout;
