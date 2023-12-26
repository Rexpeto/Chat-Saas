"use client";

import { GetIcons } from "@/components";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Input,
  useToast,
} from "@/components/ui";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useResizeDetector } from "react-resize-detector";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib";
import SimpleBar from "simplebar-react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  url: string;
}

const PdfViewer = ({ url }: Props) => {
  const { toast } = useToast();
  const { width, ref } = useResizeDetector();
  const [scale, setScale] = useState<number>(1);

  /// FEAT: Add pagination
  const [numPages, setNumPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  /// FEAT: Validate page number
  const CustomPageValidator = z.object({
    page: z
      .string()
      .refine((num) => Number(num) > 0 && Number(num) <= numPages!),
  });

  type TCustomPageValidator = z.infer<typeof CustomPageValidator>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TCustomPageValidator>({
    defaultValues: { page: "1" },
    resolver: zodResolver(CustomPageValidator),
  });

  const handlePageSubmit = ({ page }: TCustomPageValidator) => {
    setCurrentPage(Number(page));
    setValue("page", String(page));
  };

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
              className={cn(
                "w-16 h-8 text-sm focus-visible:ring-1 focus-visible:ring-blue-600 transition",
                errors.page && "border-red-500 focus-visible:ring-0",
              )}
              {...register("page")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(handlePageSubmit)();
                }
              }}
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

        <div className="space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button arial-label="Zoom" className="gap-1.5" variant="outline">
                <GetIcons icon="MdOutlineSearch" />
                {scale * 100}%
                <GetIcons icon="LuChevronDown" className="opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>

              <DropdownMenuItem onSelect={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>

              <DropdownMenuItem onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 max-h-screen w-full">
        <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)]">
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
              <Page
                width={width ? width : 1}
                pageNumber={currentPage}
                scale={scale}
              />
            </Document>
          </div>
        </SimpleBar>
      </div>
    </div>
  );
};

export default PdfViewer;
