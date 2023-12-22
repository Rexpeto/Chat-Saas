import GetIcon from "@/components/GetIcons";
import Dropzone, { DropzoneState } from "react-dropzone";

const UploadDropzone = () => {
  return (
    <Dropzone multiple={false}>
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border border-dashed border-gray-300 dark:border-gray-700 h-64 m-4 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <GetIcon
                  icon="MdOutlineCloudUpload"
                  className="text-5xl text-zinc-500 dark:text-white mb-2"
                />
                <p className="mb-2 text-sm text-zinc-700 dark:text-white">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white dark:bg-gray-800 flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 dark:outline-gray-700 divide-x divide-zinc-200 dark:divide-zinc-700">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <GetIcon
                      icon="ImFilePdf"
                      className="text-zinc-500 dark:text-white"
                    />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              <input
                {...getInputProps()}
                type="file"
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadDropzone;