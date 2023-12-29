import { GetIcons } from "@/components";
import { Button, Textarea } from "@/components/ui";

interface Props {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: Props) => {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <form className="flex flex-row gap-3 mx-2 md:mx-4 lg:mx-auto md:last:mb-6 lg:max-w-2xl xl:max-w-3xl">
        <div className="relative flex md:flex-col items-stretch flex-1 h-full">
          <div className="relative p-4 flex flex-col flex-grow w-full">
            <div className="relative">
              <Textarea
                rows={1}
                maxRows={4}
                autoFocus
                placeholder="Enter your question"
                className="pr-12 text-base resize-none"
              />
              <Button className="absolute top-1/2 -translate-y-1/2 right-2 bg-blue-600 hover:bg-blue-700 dark:text-white dark:bg-blue-500 dark:hover:bg-blue-600">
                <GetIcons icon="LuSend" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
