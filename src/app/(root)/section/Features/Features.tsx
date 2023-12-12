import { GradientImg } from "@/components";
import { Steps } from "./components";

const Features = () => {
  return (
    <section className="max-w-5xl mx-auto mb-32 mt-32 sm:mt-56">
      <div className="mb-12 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:text-center">
          <h2 className="font-bold text-4xl sm:text-5xl mt-2 text-gray-900 dark:text-white">
            Start chatting in minutes
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Chatting to your PDF files has never been easier than with Vyper.
          </p>
        </div>
      </div>

      {/* Steps */}
      <Steps />

      {/* Image file upload preview */}
      <GradientImg
        src="/file-upload-preview.jpg"
        alt="File upload preview"
        width={1419}
        height={732}
      />
    </section>
  );
};

export default Features;
