import type { SignInErrorMessages } from "../config/sign-in-content";

export type SignInValues = {
  email: string;
  password: string;
};

export type SignInFieldErrors = Partial<Record<keyof SignInValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignIn(values: SignInValues, messages: SignInErrorMessages): SignInFieldErrors {
  const errors: SignInFieldErrors = {};
  const email = values.email.trim();

  if (!email) errors.email = messages.emailRequired;
  else if (!EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid;

  if (!values.password) errors.password = messages.passwordRequired;

  return errors;
}
