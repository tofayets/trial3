import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic Background</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                I am a dedicated educator and researcher in Computer Science and Engineering with over 8 years of
                experience in academia and industry. I hold a Ph.D. in Computer Science from the University of
                Technology, where I specialized in Machine Learning and Software Engineering.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Ph.D. in Computer Science</strong> - University of Technology (2018)
                  </li>
                  <li>
                    <strong>M.Sc. in Software Engineering</strong> - State University (2014)
                  </li>
                  <li>
                    <strong>B.Sc. in Computer Science</strong> - National University (2012)
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Primary Areas</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Machine Learning and Deep Learning</li>
                    <li>• Software Engineering and Testing</li>
                    <li>• Data Science and Analytics</li>
                    <li>• Human-Computer Interaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Automated Software Testing</li>
                    <li>• Educational Technology</li>
                    <li>• Healthcare Informatics</li>
                    <li>• Natural Language Processing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teaching Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                I believe in creating an inclusive and engaging learning environment where students are encouraged to
                think critically and explore innovative solutions. My teaching approach combines theoretical foundations
                with practical applications, ensuring students gain both conceptual understanding and hands-on
                experience.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                I emphasize collaborative learning, real-world problem solving, and the development of both technical
                and soft skills that are essential for success in the rapidly evolving field of computer science.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Lecturer</h4>
                  <p className="text-blue-600">Faculty of Science and Technology, AIUB</p>
                  <p className="text-gray-500 text-sm">2020 - Present</p>
                  <p className="text-gray-600 mt-2">
                    Teaching undergraduate and graduate courses in Computer Science, conducting research in machine
                    learning and software engineering, supervising student projects and theses.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Research Associate</h4>
                  <p className="text-blue-600">Tech Innovation Lab</p>
                  <p className="text-gray-500 text-sm">2018 - 2020</p>
                  <p className="text-gray-600 mt-2">
                    Conducted research on automated software testing and machine learning applications in software
                    development processes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
