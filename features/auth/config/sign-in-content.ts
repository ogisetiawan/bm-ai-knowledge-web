export type SignInErrorMessages = {
  emailRequired: string;
  emailInvalid: string;
  passwordRequired: string;
  unavailable: string;
  generic: string;
};

export type SignInContent = {
  triggerLabel: string;
  title: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  showPasswordLabel: string;
  hidePasswordLabel: string;
  submitLabel: string;
  submittingLabel: string;
  closeLabel: string;
  helpText: string;
  errors: SignInErrorMessages;
};

export const signInContent: SignInContent = {
  triggerLabel: "Sign in",
  title: "Welcome back",
  description: "Sign in to search and ask questions across your company knowledge.",
  emailLabel: "Work email",
  emailPlaceholder: "name@company.com",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter your password",
  showPasswordLabel: "Show password",
  hidePasswordLabel: "Hide password",
  submitLabel: "Sign in",
  submittingLabel: "Signing in…",
  closeLabel: "Close",
  helpText: "Don't have an account? Contact your administrator.",
  errors: {
    emailRequired: "Enter your email address.",
    emailInvalid: "Enter a valid email address.",
    passwordRequired: "Enter your password.",
    unavailable: "Sign-in isn't available yet. Please try again later.",
    generic: "Something went wrong. Please try again.",
  },
};
