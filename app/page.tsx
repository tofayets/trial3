import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, BookOpen, MessageSquare, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Dr. Sarah Johnson"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-blue-100"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Dr. Sarah Johnson</h1>
          <p className="text-xl text-gray-600 mb-6">Lecturer at Faculty of Science and Technology, AIUB</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Computer Science and Engineering • Machine Learning • Data Science • Software Engineering
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Link href="/cv">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <p className="font-medium">Curriculum Vitae</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/research">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <p className="font-medium">Research</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <p className="font-medium">Blog</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/contact">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-2 text-red-600" />
                <p className="font-medium">Contact</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Updates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Latest Publication</h3>
              <p className="text-gray-600 mb-4">
                "Deep Learning Approaches for Automated Software Testing" published in IEEE Transactions on Software
                Engineering
              </p>
              <Link href="/research">
                <Button variant="outline" size="sm">
                  View Research
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Recent Blog Post</h3>
              <p className="text-gray-600 mb-4">
                "Getting Started with Machine Learning in Computer Science Education"
              </p>
              <Link href="/blog">
                <Button variant="outline" size="sm">
                  Read Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
