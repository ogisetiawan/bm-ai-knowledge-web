import type { SignInValues } from "../lib/validate-sign-in";

export class AuthUnavailableError extends Error {
  constructor() {
    super("Sign-in endpoint is not defined in specs/api-contracts.md");
    this.name = "AuthUnavailableError";
  }
}

// Endpoint, payload and session mechanism must come from the NestJS Gateway contract.
export async function signIn(credentials: SignInValues): Promise<void> {
  void credentials;
  throw new AuthUnavailableError();
}
