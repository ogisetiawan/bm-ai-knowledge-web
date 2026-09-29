"use client";

import { useId, useRef, useState, type FormEvent } from "react";

import type { SignInContent } from "../config/sign-in-content";
import { validateSignIn, type SignInFieldErrors, type SignInValues } from "../lib/validate-sign-in";
import { AuthUnavailableError, signIn } from "../services/auth.service";

type SignInFormProps = {
  content: SignInContent;
  onSuccess: () => void;
};

const inputClassName =
  "block h-12 w-full rounded-xl border border-ink/15 bg-white px-4 text-[15px] text-ink placeholder:text-ink/35 transition-colors focus:border-brand/50 focus:outline-none focus:ring-4 focus:ring-brand/10 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/10 disabled:bg-ink/[0.03]";

function EyeIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M1.75 10S4.75 4.25 10 4.25 18.25 10 18.25 10 15.25 15.75 10 15.75 1.75 10 1.75 10Z" />
      <circle cx="10" cy="10" r="2.5" />
      {!open && <path d="M3 17 17 3" />}
    </svg>
  );
}

export function SignInForm({ content, onSuccess }: SignInFormProps) {
  const emailId = useId();
  const passwordId = useId();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<SignInValues>({ email: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState<SignInFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function updateField(field: keyof SignInValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (fieldErrors[field]) setFieldErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const errors = validateSignIn(values, content.errors);
    setFieldErrors(errors);
    setFormError(null);

    if (errors.email) return emailRef.current?.focus();
    if (errors.password) return passwordRef.current?.focus();

    setSubmitting(true);
    try {
      await signIn({ email: values.email.trim(), password: values.password });
      onSuccess();
    } catch (error) {
      setFormError(error instanceof AuthUnavailableError ? content.errors.unavailable : content.errors.generic);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      {formError && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {formError}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className="text-sm font-semibold text-ink">
          {content.emailLabel}
        </label>
        <input
          ref={emailRef}
          id={emailId}
          name="email"
          type="email"
          autoComplete="username"
          inputMode="email"
          autoFocus
          value={values.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder={content.emailPlaceholder}
          disabled={submitting}
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
          className={inputClassName}
        />
        {fieldErrors.email && (
          <p id={`${emailId}-error`} className="text-sm text-red-600">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={passwordId} className="text-sm font-semibold text-ink">
          {content.passwordLabel}
        </label>
        <div className="relative">
          <input
            ref={passwordRef}
            id={passwordId}
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={values.password}
            onChange={(event) => updateField("password", event.target.value)}
            placeholder={content.passwordPlaceholder}
            disabled={submitting}
            aria-invalid={fieldErrors.password ? true : undefined}
            aria-describedby={fieldErrors.password ? `${passwordId}-error` : undefined}
            className={`${inputClassName} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? content.hidePasswordLabel : content.showPasswordLabel}
            aria-pressed={showPassword}
            className="absolute inset-y-0 right-1.5 my-auto inline-flex size-9 items-center justify-center rounded-lg text-ink/45 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-brand"
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
        {fieldErrors.password && (
          <p id={`${passwordId}-error`} className="text-sm text-red-600">
            {fieldErrors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        aria-busy={submitting}
        className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:bg-brand/60"
      >
        {submitting && (
          <span
            aria-hidden="true"
            className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          />
        )}
        {submitting ? content.submittingLabel : content.submitLabel}
      </button>
    </form>
  );
}
