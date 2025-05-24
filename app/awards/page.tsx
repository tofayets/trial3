import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Star, Medal } from "lucide-react"

const awards = [
  {
    title: "Excellence in Teaching Award",
    institution: "Faculty of Science and Technology, AIUB",
    year: 2023,
    description: "Recognized for outstanding teaching performance and student engagement in computer science courses.",
    icon: Trophy,
    color: "text-yellow-600",
  },
  {
    title: "Best Paper Award",
    institution: "International Conference on Software Engineering (ICSE)",
    year: 2024,
    description: 'Awarded for the paper "AI-Powered Code Review: Enhancing Software Quality Through Machine Learning".',
    icon: Award,
    color: "text-blue-600",
  },
  {
    title: "Young Researcher Award",
    institution: "IEEE Computer Society",
    year: 2023,
    description: "Recognition for significant contributions to software engineering research at an early career stage.",
    icon: Star,
    color: "text-purple-600",
  },
  {
    title: "Outstanding Graduate Student Award",
    institution: "University of Technology",
    year: 2018,
    description: "Awarded for exceptional academic performance and research contributions during doctoral studies.",
    icon: Medal,
    color: "text-green-600",
  },
  {
    title: "Research Excellence Grant",
    institution: "National Science Foundation",
    year: 2022,
    description:
      'Competitive research grant awarded for the project "Machine Learning Applications in Educational Technology".',
    icon: Award,
    color: "text-red-600",
  },
  {
    title: "Innovation in Education Award",
    institution: "Association for Computing Machinery (ACM)",
    year: 2022,
    description:
      "Recognition for innovative teaching methods and curriculum development in computer science education.",
    icon: Trophy,
    color: "text-orange-600",
  },
]

export default function AwardsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Awards & Recognition</h1>

        <div className="grid gap-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-gray-50 ${award.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{award.title}</h3>
                        <span className="text-lg font-medium text-gray-500">{award.year}</span>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{award.institution}</p>
                      <p className="text-gray-600 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Professional Memberships</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Professional Organizations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• IEEE Computer Society (Senior Member)</li>
                  <li>• Association for Computing Machinery (ACM)</li>
                  <li>• International Association of Computer Science and Information Technology</li>
                  <li>• Bangladesh Computer Society</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Editorial & Review Roles</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reviewer: IEEE Transactions on Software Engineering</li>
                  <li>• Reviewer: ACM Computing Surveys</li>
                  <li>• Program Committee: ICSE 2024</li>
                  <li>• Editorial Board: Journal of Educational Technology</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
