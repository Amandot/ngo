"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogoutDialog } from "@/components/logout-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, LogIn } from "lucide-react"

export function AuthButtons() {
	const { status, data } = useSession()

	if (status === "loading") {
		return (
			<div className="flex items-center gap-2">
				<div className="animate-pulse h-8 w-8 bg-gray-200 rounded-full"></div>
				<div className="animate-pulse h-8 w-20 bg-gray-200 rounded"></div>
			</div>
		)
	}

	if (status === "authenticated") {
		const user = data?.user
		const userInitials = user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'
		
		return (
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2">
					<Avatar className="h-8 w-8">
						<AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
						<AvatarFallback className="bg-primary text-primary-foreground text-sm">
							{userInitials}
						</AvatarFallback>
					</Avatar>
					<span className="text-sm font-medium hidden sm:inline">
						{user?.name || user?.email}
					</span>
				</div>
				<LogoutDialog 
					redirectTo="/"
					showConfirmation={true}
					variant="outline"
					size="sm"
				>
					Sign out
				</LogoutDialog>
			</div>
		)
	}

	// Unauthenticated - show sign in options
	return (
		<div className="flex items-center gap-2">
			<Button asChild variant="ghost" size="sm" className="hidden sm:flex">
				<Link href="/auth/user-login">
					<LogIn className="h-4 w-4 mr-2" />
					Sign In
				</Link>
			</Button>
			<Button asChild size="sm">
				<Link href="/auth/user-login">
					<User className="h-4 w-4 sm:mr-2" />
					<span className="hidden sm:inline">Get Started</span>
				</Link>
			</Button>
		</div>
	)
}


