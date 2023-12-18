import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account setting",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
