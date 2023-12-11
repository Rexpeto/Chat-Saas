import { cn } from "@/lib";
import { ReactNode } from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-auto max-w-screen-xl w-full px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
