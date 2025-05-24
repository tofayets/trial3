import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Dr. Sarah Johnson - Academic Portfolio",
  description: "Personal academic portfolio of Dr. Sarah Johnson, Computer Science and Engineering faculty member",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-50 border-t py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 Dr. Sarah Johnson. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
