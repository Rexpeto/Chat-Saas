import Link from "next/link";
import { Container, GetIcons } from ".";
import Image from "next/image";
import { buttonVariants } from "./ui";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = () => {
  return (
    <nav className="sticky top-0 inset-x-0 h-14 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 w-full z-50 transition">
      <Container>
        <div className="flex justify-between items-center h-14 border-b border-zinc-200 dark:border-zinc-700">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="logo"
              title="vyper"
            />
          </Link>

          <div className="sm:flex items-center space-x-4 hidden">
            <Link
              href="/pricing"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Pricing
            </Link>

            <LoginLink
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Sign in
            </LoginLink>

            <RegisterLink className={buttonVariants({ size: "sm" })}>
              Get Started <GetIcons icon="MdKeyboardArrowRight" />
            </RegisterLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
