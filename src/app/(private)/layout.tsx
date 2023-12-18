import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Chat Vyper",
    default: "Chat Vyper",
  },
  description: "dashboard of chat vyper",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
