"use client";

import { useToast } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { createContext, useState } from "react";

type StreamResponse = {
  addMessage: (message: string) => void;
  message: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

export const ChatContext = createContext<StreamResponse>({
  addMessage: (message) => {},
  message: "",
  handleInputChange: (e) => {},
  isLoading: false,
});

interface Props {
  children: React.ReactNode;
  fileId: string;
}

export const ChatContextProvider = ({ children, fileId }: Props) => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const { mutate: sendMessage } = useMutation({
    mutationFn: async ({ message }: { message: string }) => {
      const response = await fetch(`/api/messages/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileId,
          message,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      return response.body;
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const addMessage = (message: string) => sendMessage({ message });

  return (
    <ChatContext.Provider
      value={{
        addMessage,
        message,
        handleInputChange,
        isLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
