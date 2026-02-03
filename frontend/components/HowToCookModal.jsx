"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const steps = [
  "Upload or snap a photo of your pantry.",
  "We detect your ingredients and match cuisines you love.",
  "Generate AI-crafted recipes with substitutions and tips.",
  "Save to collections or export to PDF for offline cooking.",
];

export default function HowToCookModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="hidden text-stone-600 hover:text-orange-600 hover:bg-orange-50 sm:inline-flex"
        >
          <Sparkles className="h-4 w-4" />
          How it works
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-2">
          <DialogTitle>Cook smarter in 4 steps</DialogTitle>
          <DialogDescription>
            Serve uses AI to turn your pantry into dinner ideas in under a minute.
          </DialogDescription>
        </DialogHeader>
        <ol className="space-y-3 pt-2 text-sm text-stone-700">
          {steps.map((step, idx) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {idx + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </DialogContent>
    </Dialog>
  );
}
