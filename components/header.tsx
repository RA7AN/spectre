"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Settings, LogOut, User, Menu, X } from "lucide-react"
import { LocationDisplay } from "@/components/location-display"
import { useAuth } from "@/lib/auth-context"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, logout, user } = useAuth()
  const pathname = usePathname()

  // Don't show login/register buttons on login and register pages
  const showAuthButtons = !pathname.includes("/login") && !pathname.includes("/register")

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-bold text-xl">Temporal Video Grounding</span>
            </Link>
            <LocationDisplay />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>

              {isAuthenticated && (
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
              )}

              <Link href="/about" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </nav>

            {showAuthButtons && (
              <>
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="ml-2">
                        <User className="h-4 w-4 mr-2" />
                        <span>{user?.username || "User"}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/settings" className="flex items-center">
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link href="/login">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Register
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
            <ThemeToggle />
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {isAuthenticated && (
              <Link
                href="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}

            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {showAuthButtons && (
              <>
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/profile"
                      className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                      onClick={() => {
                        logout()
                        setIsMenuOpen(false)
                      }}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary-foreground hover:bg-primary/90 bg-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

