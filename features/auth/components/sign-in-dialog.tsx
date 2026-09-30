"use client";

import Image from "next/image";
import { forwardRef, useId, useImperativeHandle, useRef, useState, type MouseEvent } from "react";

import type { SignInContent } from "../config/sign-in-content";
import { SignInForm } from "./sign-in-form";

type SignInDialogProps = {
  content: SignInContent;
  triggerClassName?: string;
};

export type SignInDialogHandle = {
  open: () => void;
};

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className="size-4"
    >
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export const SignInDialog = forwardRef<SignInDialogHandle, SignInDialogProps>(function SignInDialog(
  { content, triggerClassName },
  ref,
) {
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [formKey, setFormKey] = useState(0);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  useImperativeHandle(ref, () => ({ open: openDialog }));

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  return (
    <>
      <button type="button" onClick={openDialog} aria-haspopup="dialog" className={triggerClassName}>
        {content.triggerLabel}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClick={handleBackdropClick}
        onClose={() => setFormKey((key) => key + 1)}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[420px] overflow-y-auto rounded-[28px] border border-ink/10 bg-white p-0 text-ink shadow-[0_24px_60px_-20px_rgba(6,53,122,0.25)] transition-[opacity,scale] duration-200 backdrop:bg-ink/40 open:scale-100 open:opacity-100 starting:open:scale-95 starting:open:opacity-0"
      >
        <div className="relative px-5 pt-7 pb-6 sm:px-8 sm:pt-8 sm:pb-7">
          <button
            type="button"
            onClick={closeDialog}
            aria-label={content.closeLabel}
            className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/[0.04] hover:text-ink focus-visible:outline-2 focus-visible:outline-brand"
          >
            <CloseIcon />
          </button>

          <Image src="/images/bm-icon.svg" alt="" width={264} height={150} className="h-9 w-auto" />

          <h2 id={titleId} className="mt-5 text-2xl leading-tight font-extrabold tracking-[-0.02em] text-ink sm:mt-6 sm:text-[28px]">
            {content.title}
          </h2>
          <p id={descriptionId} className="mt-2 text-[15px] leading-6 text-ink/55">
            {content.description}
          </p>

          <div className="mt-7">
            <SignInForm key={formKey} content={content} onSuccess={closeDialog} />
          </div>

          <p className="mt-6 text-center text-sm text-ink/50">{content.helpText}</p>
        </div>
      </dialog>
    </>
  );
});
