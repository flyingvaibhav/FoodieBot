"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export function DialogOverlay({ className, ...props }) {
	return (
		<DialogPrimitive.Overlay
			className={cn(
				"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
				className
			)}
			{...props}
		/>
	);
}

export function DialogContent({ className, children, ...props }) {
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				className={cn(
					"fixed left-1/2 top-1/2 z-50 w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-90 data-[state=closed]:fade-out-90",
					className
				)}
				{...props}
			>
				{children}
				<DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-1 text-stone-500 transition hover:bg-stone-100 hover:text-stone-700">
					<X className="h-4 w-4" />
					<span className="sr-only">Close</span>
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

export function DialogHeader({ className, ...props }) {
	return <div className={cn("space-y-2", className)} {...props} />;
}

export function DialogTitle({ className, ...props }) {
	return (
		<DialogPrimitive.Title
			className={cn("text-lg font-semibold leading-6 text-stone-900", className)}
			{...props}
		/>
	);
}

export function DialogDescription({ className, ...props }) {
	return (
		<DialogPrimitive.Description
			className={cn("text-sm text-stone-500", className)}
			{...props}
		/>
	);
}
