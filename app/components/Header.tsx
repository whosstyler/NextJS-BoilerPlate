"use client"

import Link from 'next/link'
import { ThemeSelector } from './ThemeSelector'
import { useSession, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const { data: session, status } = useSession()

  return (
    <header className="flex justify-between items-center p-4 bg-background">
      <Link href="/" className="text-2xl font-bold">NextJS Boilerplate</Link>
      <nav className="flex items-center space-x-4">
        {session ? (
          <>
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
            <Button variant="ghost" onClick={() => signOut()}>Sign out</Button>
          </>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
        <ThemeSelector />
      </nav>
    </header>
  )
}
