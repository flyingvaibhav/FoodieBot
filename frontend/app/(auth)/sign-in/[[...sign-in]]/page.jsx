"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInCatchAll() {
  return <SignIn appearance={{ elements: { card: "shadow-none" } }} />;
}
