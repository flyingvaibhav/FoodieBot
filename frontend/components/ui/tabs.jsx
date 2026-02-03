"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;
export const TabsList = React.forwardRef(function TabsList(
	{ className, ...props },
	ref
) {
	return (
		<TabsPrimitive.List
			ref={ref}
			className={cn(
				"inline-flex h-11 items-center justify-center rounded-full bg-stone-100 p-1 text-stone-500",
				className
			)}
			{...props}
		/>
	);
});

export const TabsTrigger = React.forwardRef(function TabsTrigger(
	{ className, ...props },
	ref
) {
	return (
		<TabsPrimitive.Trigger
			ref={ref}
			className={cn(
				"inline-flex min-w-[120px] items-center justify-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-stone-900 data-[state=active]:shadow-sm",
				className
			)}
			{...props}
		/>
	);
});

export const TabsContent = React.forwardRef(function TabsContent(
	{ className, ...props },
	ref
) {
	return (
		<TabsPrimitive.Content
			ref={ref}
			className={cn("mt-4 outline-none", className)}
			{...props}
		/>
	);
});

TabsList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";
