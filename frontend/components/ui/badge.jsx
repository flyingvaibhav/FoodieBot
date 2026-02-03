"use client";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
	variants: {
	variant: {
	default: "border-transparent bg-orange-500 text-white hover:bg-orange-600",
	secondary:
		  "border-transparent bg-stone-200 text-stone-700 hover:bg-stone-300",
	outline: "text-stone-600 border-stone-200 hover:border-stone-300",
	},
	},
	defaultVariants: {
	variant: "default",
	},
	}
);

export function Badge({ className, variant, ...props }) {
	return (
	<div
	className={cn(badgeVariants({ variant, className }))}
	data-slot="badge"
	{...props}
	/>
	);
}
