import { currentUser } from "@clerk/nextjs/server";

// Fetches the signed-in user and normalizes a minimal shape used by the UI.
export async function checkUser() {
  const user = await currentUser();

  if (!user) return null;

  // Prefer a stored subscription tier; fall back to "free".
  const tier =
    user?.publicMetadata?.subscriptionTier || user?.privateMetadata?.tier || "free";

  return {
    id: user.id,
    fullName: user.fullName ?? user.username ?? "Chef",
    imageUrl: user.imageUrl,
    email: user.emailAddresses?.[0]?.emailAddress,
    subscriptionTier: tier,
  };
}
