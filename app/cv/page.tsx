import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"

export default function CVPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Curriculum Vitae</h1>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Full CV (PDF)
          </Button>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold">Ph.D. in Computer Science</h3>
                  <p className="text-blue-600">University of Technology</p>
                  <p className="text-gray-500">2015 - 2018</p>
                  <p className="text-gray-600 mt-2">
                    Dissertation: "Machine Learning Approaches for Automated Software Testing"
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold">M.Sc. in Software Engineering</h3>
                  <p className="text-green-600">State University</p>
                  <p className="text-gray-500">2012 - 2014</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold">B.Sc. in Computer Science</h3>
                  <p className="text-purple-600">National University</p>
                  <p className="text-gray-500">2008 - 2012</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Lecturer</h3>
                  <p className="text-blue-600">Faculty of Science and Technology, AIUB</p>
                  <p className="text-gray-500">January 2020 - Present</p>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Teaching undergraduate and graduate courses in Computer Science</li>
                    <li>• Supervising 15+ student research projects and theses</li>
                    <li>• Conducting research in machine learning and software engineering</li>
                    <li>• Published 12 peer-reviewed papers in international journals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Research Associate</h3>
                  <p className="text-blue-600">Tech Innovation Lab</p>
                  <p className="text-gray-500">June 2018 - December 2019</p>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>• Led research projects on automated software testing</li>
                    <li>• Collaborated with industry partners on ML applications</li>
                    <li>• Mentored junior researchers and graduate students</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Programming Languages</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript/TypeScript</li>
                    <li>C++</li>
                    <li>R</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>TensorFlow/PyTorch</li>
                    <li>React/Next.js</li>
                    <li>Docker/Kubernetes</li>
                    <li>AWS/Azure</li>
                    <li>Git/GitHub</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Research Areas</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Machine Learning</li>
                    <li>Software Testing</li>
                    <li>Data Science</li>
                    <li>HCI</li>
                    <li>Educational Technology</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Publications (Selected)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Deep Learning Approaches for Automated Software Testing</h4>
                  <p className="text-gray-600">IEEE Transactions on Software Engineering, 2024</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Machine Learning in Educational Technology: A Systematic Review</h4>
                  <p className="text-gray-600">Computers & Education, 2023</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Automated Test Case Generation Using Neural Networks</h4>
                  <p className="text-gray-600">ACM Transactions on Software Engineering, 2023</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View All Publications
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
