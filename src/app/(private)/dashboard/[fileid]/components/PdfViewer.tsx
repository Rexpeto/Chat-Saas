"use client";

import { GetIcons } from "@/components";
import { Button, Input, useToast } from "@/components/ui";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useResizeDetector } from "react-resize-detector";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  url: string;
}

const PdfViewer = ({ url }: Props) => {
  const { toast } = useToast();
  const { width, ref } = useResizeDetector();

  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-900 rounded shadow-lg w-full">
      <div className="flex items-center justify-between h-14 w-full px-2 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center gap-1.5">
          <Button
            arial-label="Previous page"
            className="p-2"
            variant="ghost"
            onClick={() =>
              setCurrentPage((prev) => (prev - 1 > 1 ? prev - 1 : 1))
            }
          >
            <GetIcons icon="MdArrowBackIos" className="m-0" />
          </Button>

          <div className="flex items-center gap-1.5">
            <Input
              className="w-16 h-8 text-sm"
              min={1}
              max={numPages}
              type="number"
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
            />
            <p className="space-x-1 text-sm text-zinc-700 dark:text-zinc-400">
              <span>/</span> <span>{numPages}</span>
            </p>
          </div>

          <Button
            arial-label="Next page"
            className="p-2"
            variant="ghost"
            onClick={() =>
              setCurrentPage((prev) => (prev + 1 <= numPages ? prev + 1 : prev))
            }
          >
            <GetIcons icon="MdArrowForwardIos" className="m-0" />
          </Button>
        </div>
      </div>

      <div className="flex-1 max-h-screen w-full">
        <div ref={ref}>
          <Document
            loading={
              <div className="w-full my-10 flex justify-center items-center">
                <GetIcons
                  icon="ImSpinner2"
                  className="animate-spin text-4xl text-blue-600"
                />
              </div>
            }
            onLoadError={() =>
              toast({
                title: "Error loading file",
                description: "Please try again later",
                variant: "destructive",
              })
            }
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            file={url}
            className="max-h-full"
          >
            <Page width={width ? width : 1} pageNumber={currentPage} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
