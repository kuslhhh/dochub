// components/SingleImageDropzone.tsx

'use client';

import { formatFileSize } from '@edgestore/react/utils';
import { UploadCloudIcon, X } from 'lucide-react';
import * as React from 'react';
import { useDropzone, type DropzoneOptions } from 'react-dropzone';
import { twMerge } from 'tailwind-merge';

import { Spinner } from './spinner';
import Image from 'next/image';

const variants = {
  base: 'relative rounded-md flex justify-center items-center flex-col cursor-pointer min-h-[150px] min-w-[200px] border border-dashed border-gray-400 dark:border-gray-300 transition-colors duration-200 ease-in-out',
  image:
    'border-0 p-0 min-h-0 min-w-0 overflow-hidden cursor-pointer w-[200px] h-[200px] rounded-md border border-dashed border-gray-400 dark:border-gray-300 transition-colors duration-200 ease-in-out relative',
  loading:
    'opacity-80 dark:opacity-60 cursor-not-allowed transition-opacity duration-200 ease-in-out',
  accept: 'border-blue-600 dark:border-blue-500',
  reject: 'border-red-500 dark:border-red-500',
};

export interface SingleImageDropzoneProps extends DropzoneOptions {
  isLoading?: boolean;
  onDelete?: () => void;
  value?: File | string | null;
  className?: string;
  onChange?: (file?: File) => void; // Added onChange prop
}

export const SingleImageDropzone = ({
  isLoading = false,
  onDelete,
  value,
  className,
  onChange, // Destructure onChange
  ...rest
}: SingleImageDropzoneProps) => {
  const [file, setFile] = React.useState<File | string | null>(value ?? null);
  const [fileRejection, setFileRejection] = React.useState<string | undefined>(
    undefined
  );

  const onDrop = React.useCallback<NonNullable<DropzoneOptions['onDrop']>>(
    (acceptedFiles, rejectedFiles, event) => {
      if (isLoading) return;

      const newFile = acceptedFiles[0];
      setFile(newFile);
      onChange?.(newFile); // Call onChange with the new file
      if (rejectedFiles.length > 0) {
        setFileRejection(rejectedFiles[0].errors[0].message);
        setTimeout(() => setFileRejection(undefined), 5000);
      }
    },
    [isLoading, onChange]
  );

  const handleDelete = React.useCallback(() => {
    if (isLoading) return;

    setFile(null);
    onDelete?.();
  }, [isLoading, onDelete]);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      multiple: false,
      onDrop,
      ...rest,
    });

  React.useEffect(() => {
    setFile(value ?? null);
  }, [value]);

  return (
    <div
      {...getRootProps({
        className: twMerge(
          variants.base,
          isDragAccept && variants.accept,
          isDragReject && variants.reject,
          !!file && variants.image,
          isLoading && variants.loading,
          className
        ),
      })}
    >
      <input {...getInputProps()} />

      {file ? (
        <>
          <Image
            src={typeof file === 'string' ? file : URL.createObjectURL(file)}
            alt="Uploaded file"
            fill
            className="object-cover"
            sizes="200px"
          />
          <button
            type="button"
            onClick={handleDelete}
            className="absolute top-1 right-1 p-1 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80"
            disabled={isLoading}
          >
            <X className="text-white" size={18} />
          </button>
        </>
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <UploadCloudIcon className="h-10 w-10 mb-2 text-gray-500 dark:text-gray-300" />
          <p className="text-gray-500 dark:text-gray-300">
            Drag & drop an image here, or click to select one
          </p>
        </>
      )}

      {fileRejection && (
        <p className="mt-2 text-red-500 dark:text-red-400 text-sm">
          {fileRejection}
        </p>
      )}

      {file && typeof file !== 'string' && (
        <p className="text-xs text-gray-500 mt-2">
          {formatFileSize(file.size)}
        </p>
      )}
    </div>
  );
};
