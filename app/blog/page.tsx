import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning in Computer Science Education",
    excerpt:
      "A comprehensive guide for educators looking to integrate machine learning concepts into their computer science curriculum.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Education",
    slug: "ml-in-cs-education",
  },
  {
    id: 2,
    title: "The Future of Automated Software Testing",
    excerpt:
      "Exploring how AI and machine learning are revolutionizing the way we approach software testing and quality assurance.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Research",
    slug: "future-automated-testing",
  },
  {
    id: 3,
    title: "Building Inclusive Learning Environments in Tech Education",
    excerpt:
      "Strategies and best practices for creating welcoming and inclusive classrooms that support all students in their learning journey.",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "Teaching",
    slug: "inclusive-learning-environments",
  },
  {
    id: 4,
    title: "Research Collaboration in the Digital Age",
    excerpt:
      "How modern tools and platforms are changing the way researchers collaborate and share knowledge across institutions.",
    date: "2023-12-10",
    readTime: "7 min read",
    category: "Research",
    slug: "digital-research-collaboration",
  },
  {
    id: 5,
    title: "Effective Code Review Practices for Students",
    excerpt:
      "Teaching students the art of code review: techniques, tools, and best practices for peer learning and code quality.",
    date: "2023-11-28",
    readTime: "9 min read",
    category: "Teaching",
    slug: "code-review-practices",
  },
  {
    id: 6,
    title: "My Journey from Industry to Academia",
    excerpt: "Reflections on transitioning from a software engineering career to academic research and teaching.",
    date: "2023-11-15",
    readTime: "12 min read",
    category: "Personal",
    slug: "industry-to-academia",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">Thoughts on research, teaching, technology, and academic life.</p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === "Education"
                        ? "bg-blue-100 text-blue-800"
                        : post.category === "Research"
                          ? "bg-green-100 text-green-800"
                          : post.category === "Teaching"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="flex items-center gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>About This Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              This blog serves as a platform for sharing insights, experiences, and knowledge from my journey in
              computer science education and research. Here you'll find posts about teaching methodologies, research
              findings, technology trends, and reflections on academic life. I aim to contribute to the broader
              conversation about education, technology, and research in our field.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
