"use client";

import { GetIcons } from "@/components";
import { useToast } from "@/components/ui";
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

  return (
    <div className="flex flex-col items-center bg-gray-200/60 dark:bg-gray-800 rounded shadow w-full">
      <div className="flex items-center justify-between h-14 w-full px-2 border-b border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center gap-1.5">top bar</div>
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
            file={url}
            className="max-h-full"
          >
            <Page width={width ? width : 1} pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
