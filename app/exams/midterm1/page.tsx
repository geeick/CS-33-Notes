import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Midterm1Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/exams" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Exams
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Midterm 1 Information</h1>
        </div>
        <p className="mt-2 text-muted-foreground">Everything you need to know about the first midterm exam</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Exam Details</CardTitle>
            <CardDescription>Important information about the exam</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Date:</div>
                <div className="col-span-2">TBD</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Time:</div>
                <div className="col-span-2">TBD</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Location:</div>
                <div className="col-span-2">TBD</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Format:</div>
                <div className="col-span-2">Written exam with multiple choice and free response questions</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Duration:</div>
                <div className="col-span-2">2 hours</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Materials:</div>
                <div className="col-span-2">One double-sided 8.5"x11" handwritten cheat sheet allowed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Topics Covered</CardTitle>
            <CardDescription>Material that will be tested on the exam</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Introduction to Computer Systems (Ch. 1)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Information Representation: Bits and Bytes (Ch. 2.1-2.2)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Integer Representation and Arithmetic (Ch. 2.1-2.3)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Assembly Language Basics (Ch. 3.1-3.5)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Control Structures in Assembly (Ch. 3.6)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Procedures in Assembly (Ch. 3.7)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
            <CardDescription>Materials to help you prepare for the exam</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Link
                href="/exams/midterm1/study-guide"
                className="block rounded-lg border p-4 hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold">Study Guide</h3>
                <p className="mt-1 text-sm text-muted-foreground">Comprehensive guide covering all exam topics</p>
              </Link>
              <Link
                href="/exams/midterm1/practice"
                className="block rounded-lg border p-4 hover:bg-accent transition-colors"
              >
                <h3 className="font-semibold">Practice Problems</h3>
                <p className="mt-1 text-sm text-muted-foreground">Sample problems similar to those on the exam</p>
              </Link>
              <Link href="/problems/homework" className="block rounded-lg border p-4 hover:bg-accent transition-colors">
                <h3 className="font-semibold">Homework Problems</h3>
                <p className="mt-1 text-sm text-muted-foreground">Review assigned homework problems</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exam Tips</CardTitle>
            <CardDescription>Advice for success on the exam</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Focus on understanding concepts rather than memorizing facts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Practice tracing through assembly code by hand</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Review all homework problems and solutions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Create a well-organized cheat sheet with key formulas and concepts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Attend office hours if you have specific questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Form study groups to discuss challenging topics</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
