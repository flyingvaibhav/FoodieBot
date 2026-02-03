"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
	return (
		<div
			className={cn(
				"rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900",
				className
			)}
			{...props}
		/>
	);
}

export function CardHeader({ className, ...props }) {
	return (
		<div className={cn("p-6 pb-3", className)} {...props} />
	);
}

export function CardTitle({ className, ...props }) {
	return (
		<h3
			className={cn("text-lg font-semibold leading-6 text-stone-900", className)}
			{...props}
		/>
	);
}

export function CardDescription({ className, ...props }) {
	return (
		<p className={cn("text-sm text-stone-500", className)} {...props} />
	);
}

export function CardContent({ className, ...props }) {
	return <div className={cn("px-6 pb-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }) {
	return (
		<div className={cn("px-6 pb-6 pt-0 flex items-center", className)} {...props} />
	);
}
