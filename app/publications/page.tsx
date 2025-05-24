import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

const publications = [
  {
    type: "Journal",
    title: "Deep Learning Approaches for Automated Software Testing",
    authors: "Sarah Johnson, Michael Chen, David Rodriguez",
    venue: "IEEE Transactions on Software Engineering",
    year: 2024,
    doi: "10.1109/TSE.2024.001",
  },
  {
    type: "Conference",
    title: "AI-Powered Code Review: Enhancing Software Quality Through Machine Learning",
    authors: "Sarah Johnson, Emily Zhang, Carlos Martinez",
    venue: "International Conference on Software Engineering (ICSE 2024)",
    year: 2024,
  },
  {
    type: "Journal",
    title: "Machine Learning in Educational Technology: A Systematic Review",
    authors: "Sarah Johnson, Lisa Wang, Ahmed Hassan",
    venue: "Computers & Education",
    year: 2023,
    doi: "10.1016/j.compedu.2023.104",
  },
  {
    type: "Journal",
    title: "Automated Test Case Generation Using Neural Networks",
    authors: "Sarah Johnson, Robert Kim",
    venue: "ACM Transactions on Software Engineering and Methodology",
    year: 2023,
    doi: "10.1145/3580305",
  },
  {
    type: "Conference",
    title: "Adaptive Learning Systems Using Deep Reinforcement Learning",
    authors: "Sarah Johnson, Alex Thompson",
    venue: "International Conference on Artificial Intelligence in Education (AIED 2023)",
    year: 2023,
  },
  {
    type: "Book Chapter",
    title: "Machine Learning Applications in Software Testing",
    authors: "Sarah Johnson",
    venue: "Advances in Software Engineering and Testing (Springer)",
    year: 2023,
  },
  {
    type: "Book Chapter",
    title: "Educational Technology and Student Engagement",
    authors: "Sarah Johnson",
    venue: "Handbook of Educational Technology (Academic Press)",
    year: 2022,
  },
]

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Publications</h1>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pub.type === "Journal"
                        ? "bg-blue-100 text-blue-800"
                        : pub.type === "Conference"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {pub.type}
                  </span>
                  <span className="text-gray-500 font-medium">{pub.year}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Authors:</strong> {pub.authors}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Published in:</strong> {pub.venue}
                </p>

                <div className="flex gap-2">
                  {pub.doi && (
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      DOI: {pub.doi}
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
