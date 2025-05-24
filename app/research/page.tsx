import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Research</h1>

        <Tabs defaultValue="journals" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="journals">Journal Publications</TabsTrigger>
            <TabsTrigger value="conferences">Conference Papers</TabsTrigger>
            <TabsTrigger value="chapters">Book Chapters</TabsTrigger>
          </TabsList>

          <TabsContent value="journals" className="mt-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Deep Learning Approaches for Automated Software Testing
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Authors:</strong> Sarah Johnson, Michael Chen, David Rodriguez
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Journal:</strong> IEEE Transactions on Software Engineering
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2024
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      DOI: 10.1109/TSE.2024.001
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Machine Learning in Educational Technology: A Systematic Review
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Authors:</strong> Sarah Johnson, Lisa Wang, Ahmed Hassan
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Journal:</strong> Computers & Education
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2023
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      DOI: 10.1016/j.compedu.2023.104
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Automated Test Case Generation Using Neural Networks</h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Authors:</strong> Sarah Johnson, Robert Kim
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Journal:</strong> ACM Transactions on Software Engineering and Methodology
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2023
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      DOI: 10.1145/3580305
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conferences" className="mt-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    AI-Powered Code Review: Enhancing Software Quality Through Machine Learning
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Authors:</strong> Sarah Johnson, Emily Zhang, Carlos Martinez
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Conference:</strong> International Conference on Software Engineering (ICSE 2024)
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2024
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Proceedings
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Slides
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Adaptive Learning Systems Using Deep Reinforcement Learning
                  </h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Authors:</strong> Sarah Johnson, Alex Thompson
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Conference:</strong> International Conference on Artificial Intelligence in Education (AIED
                    2023)
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2023
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Proceedings
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Slides
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="chapters" className="mt-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Machine Learning Applications in Software Testing</h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Book:</strong> Advances in Software Engineering and Testing
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Publisher:</strong> Springer
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2023
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Publisher Link
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Educational Technology and Student Engagement</h3>
                  <p className="text-gray-600 mb-3">
                    <strong>Book:</strong> Handbook of Educational Technology
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Publisher:</strong> Academic Press
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Year:</strong> 2022
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Publisher Link
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
