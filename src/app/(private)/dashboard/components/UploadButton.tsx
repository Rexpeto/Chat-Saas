"use client";

import { GetIcons } from "@/components";
import { Button, Dialog, DialogContent, DialogTrigger } from "@/components/ui";
import { useState } from "react";
import { UploadDropzone } from ".";

const UploadButton = () => {
  const [IsOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={IsOpen}
      onOpenChange={(v) => {
        if (!v) setIsOpen(false);
      }}
    >
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button className="flex items-center gap-2" variant="outline">
          Upload PDF <GetIcons icon="ImFilePdf" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <UploadDropzone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
