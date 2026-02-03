"use client";

import { UserButton } from "@clerk/nextjs";

export default function UserDropdown() {
	return <UserButton afterSignOutUrl="/" appearance={{ elements: { avatarBox: "size-10" } }} />;
}
