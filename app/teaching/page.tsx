import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

const courses = [
  {
    semester: "Spring 2024",
    courses: [
      {
        code: "CSE 4101",
        title: "Machine Learning",
        description:
          "Introduction to machine learning algorithms, supervised and unsupervised learning, neural networks.",
        students: 45,
      },
      {
        code: "CSE 3201",
        title: "Software Engineering",
        description: "Software development lifecycle, design patterns, testing methodologies, project management.",
        students: 38,
      },
    ],
  },
  {
    semester: "Fall 2023",
    courses: [
      {
        code: "CSE 4102",
        title: "Advanced Machine Learning",
        description: "Deep learning, reinforcement learning, advanced neural network architectures.",
        students: 32,
      },
      {
        code: "CSE 2101",
        title: "Data Structures and Algorithms",
        description: "Fundamental data structures, algorithm analysis, sorting and searching algorithms.",
        students: 52,
      },
      {
        code: "CSE 4901",
        title: "Research Methodology",
        description: "Research methods in computer science, academic writing, literature review techniques.",
        students: 28,
      },
    ],
  },
  {
    semester: "Spring 2023",
    courses: [
      {
        code: "CSE 3101",
        title: "Database Systems",
        description: "Relational databases, SQL, database design, normalization, transaction management.",
        students: 41,
      },
      {
        code: "CSE 4201",
        title: "Human-Computer Interaction",
        description: "User interface design, usability testing, interaction design principles.",
        students: 35,
      },
    ],
  },
]

export default function TeachingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Teaching</h1>

        <div className="space-y-8">
          {courses.map((semester, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">{semester.semester}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {semester.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="border-l-4 border-blue-200 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">
                          {course.code}: {course.title}
                        </h3>
                        <span className="text-gray-500 text-sm">{course.students} students</span>
                      </div>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Syllabus
                        </Button>
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Course Materials
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Teaching Philosophy & Approach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                My teaching philosophy centers on creating an inclusive, engaging, and practical learning environment. I
                believe in combining theoretical foundations with hands-on experience to help students develop both
                conceptual understanding and practical skills.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Teaching Methods</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Interactive lectures with real-world examples</li>
                    <li>• Hands-on programming assignments</li>
                    <li>• Collaborative group projects</li>
                    <li>• Industry guest speakers</li>
                    <li>• Peer review and feedback sessions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Assessment Approach</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Continuous assessment throughout semester</li>
                    <li>• Project-based evaluations</li>
                    <li>• Peer assessment components</li>
                    <li>• Reflective learning portfolios</li>
                    <li>• Industry-relevant case studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
