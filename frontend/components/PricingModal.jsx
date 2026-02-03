"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const plans = [
  {
    name: "Free",
    price: "$0",
    badge: "Starter",
    features: [
      "10 pantry scans per month",
      "5 AI meal recommendations",
      "Access to standard recipes",
      "Save to one collection",
    ],
  },
  {
    name: "Pro",
    price: "$14/mo",
    badge: "Chef",
    highlight: true,
    features: [
      "Unlimited pantry scans & AI recipes",
      "Nutritional breakdown & substitutions",
      "Chef tips and PDF exports",
      "Priority Arcjet-protected API access",
    ],
  },
];

export default function PricingModal({ subscriptionTier = "free", children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-2">
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-orange-500" />
            Pick your plan
          </DialogTitle>
          <DialogDescription>
            Switch anytime. Pro unlocks unlimited AI cooking, exports, and premium data.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-4 shadow-sm ${
                plan.highlight
                  ? "border-orange-200 bg-orange-50/70"
                  : "border-stone-200 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-stone-600">{plan.badge}</p>
                  <h3 className="text-xl font-bold text-stone-900">{plan.name}</h3>
                </div>
                {plan.highlight && (
                  <Badge className="bg-orange-500 text-white">
                    <Zap className="mr-1 h-3 w-3" />
                    Popular
                  </Badge>
                )}
              </div>
              <p className="mt-3 text-3xl font-bold text-stone-900">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <Check className="h-4 w-4 text-orange-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                {plan.name.toLowerCase() === subscriptionTier ? (
                  <Badge variant="secondary" className="w-fit">
                    Current plan
                  </Badge>
                ) : (
                  <SignedIn>
                    <Button
                      className="w-full rounded-full"
                      variant={plan.highlight ? "default" : "outline"}
                    >
                      {plan.name === "Pro" ? "Upgrade to Pro" : "Stay Free"}
                    </Button>
                  </SignedIn>
                )}
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="w-full rounded-full" variant="primary">
                      Sign in to choose
                    </Button>
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
