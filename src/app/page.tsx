import { Container, GetIcons, GradientImg } from "@/components";
import { buttonVariants } from "@/components/ui";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Container className="flex flex-col items-center justify-center text-center mb-12 mt-28 sm:mt-40">
        <div className="flex items-center justify-center space-x-2 mx-auto mb-4 px-7 py-2 max-w-fit border border-gray-200 dark:border-gray-800 hover:border-gray-300 hover:dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-white/50 dark:bg-gray-850 rounded-full shadow-md backdrop-blur overflow-hidden transition-all">
          <p className="text-sm font-semibold text-gray-700 dark:text-white">
            Vyper Chat is no public!
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white">
          Chat with your <span className="text-blue-500">documents</span> in
          seconds
        </h1>
        <p className="max-w-prose mt-5 text-zinc-700 sm:text-lg dark:text-zinc-300">
          Vyper Chat allows you to conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-5 dark:bg-white dark:text-black",
          })}
        >
          Get Started <GetIcons icon="IoIosArrowRoundForward" />
        </Link>
      </Container>

      <GradientImg
        src="/dashboard-preview.jpg"
        alt="Vyper Chat Preview"
        width={1364}
        height={866}
      />
    </>
  );
};

export default Home;
