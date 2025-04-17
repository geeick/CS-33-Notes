import Link from "next/link"
import { BookOpen, Code, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight">CS33: Computer Construction</h1>
        <p className="mt-2 text-xl text-muted-foreground">
          Based on "Computer Systems: A Programmer's Perspective" (3rd ed.) by Bryant and O'Hallaron
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Course Content
            </CardTitle>
            <CardDescription>Chapter materials and lecture notes</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/chapters/intro-bits-bytes" className="text-blue-600 hover:underline">
                  Intro + Bits and Bytes (Ch. 1, 2.1, 2.2)
                </Link>
              </li>
              <li>
                <Link href="/chapters/integers" className="text-blue-600 hover:underline">
                  Integers (Ch. 2.1-2.3)
                </Link>
              </li>
              <li>
                <Link href="/chapters/assembly-basics" className="text-blue-600 hover:underline">
                  Assembly I: Basics (Ch. 3.1-3.5)
                </Link>
              </li>
              <li>
                <Link href="/chapters/assembly-control" className="text-blue-600 hover:underline">
                  Assembly II: Control (Ch. 3.6)
                </Link>
              </li>
              <li>
                <Link href="/chapters/assembly-procedures" className="text-blue-600 hover:underline">
                  Assembly III: Procedures (Ch. 3.7)
                </Link>
              </li>
            </ul>
            <Button asChild className="mt-4 w-full">
              <Link href="/chapters">View All Chapters</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Problems & Labs
            </CardTitle>
            <CardDescription>Practice problems, homework, and lab assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/problems/homework" className="text-blue-600 hover:underline">
                  Homework Problems
                </Link>
              </li>
              <li>
                <Link href="/problems/practice" className="text-blue-600 hover:underline">
                  Practice Problems
                </Link>
              </li>
              <li>
                <Link href="/problems/labs" className="text-blue-600 hover:underline">
                  Lab Assignments
                </Link>
              </li>
              <li>
                <Link href="/problems/examples" className="text-blue-600 hover:underline">
                  Code Examples
                </Link>
              </li>
            </ul>
            <Button asChild className="mt-4 w-full">
              <Link href="/problems">View All Problems</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Exams
            </CardTitle>
            <CardDescription>Midterm and final exam information</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/exams/midterm1" className="text-blue-600 hover:underline">
                  Midterm 1 Information
                </Link>
              </li>
              <li>
                <Link href="/exams/midterm1/study-guide" className="text-blue-600 hover:underline">
                  Midterm 1 Study Guide
                </Link>
              </li>
              <li>
                <Link href="/exams/midterm1/practice" className="text-blue-600 hover:underline">
                  Midterm 1 Practice Problems
                </Link>
              </li>
            </ul>
            <Button asChild className="mt-4 w-full">
              <Link href="/exams">View All Exam Info</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">Course Schedule</h2>
        <div className="rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-3 text-left font-medium">Date</th>
                <th className="p-3 text-left font-medium">Topic</th>
                <th className="p-3 text-left font-medium">Reading</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">4/3</td>
                <td className="p-3">Intro + Bits and Bytes</td>
                <td className="p-3">Ch. 1, 2.1, 2.2</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/4</td>
                <td className="p-3">Integers</td>
                <td className="p-3">Ch. 2.1-2.3</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/4</td>
                <td className="p-3">DW 1 & Pod contract</td>
                <td className="p-3"></td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/8</td>
                <td className="p-3">Assembly I: Basics</td>
                <td className="p-3">Ch 3.1-3.5</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/10</td>
                <td className="p-3">Assembly I: Basics</td>
                <td className="p-3">Ch 3.1-3.5</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/11</td>
                <td className="p-3">DW 2 & Warmup Lab</td>
                <td className="p-3"></td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/15</td>
                <td className="p-3">Assembly II: Control</td>
                <td className="p-3">Ch 3.6</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">4/17</td>
                <td className="p-3">Assembly III: Procedures</td>
                <td className="p-3">Ch 3.7</td>
              </tr>
              <tr>
                <td className="p-3">4/18</td>
                <td className="p-3">DW 3 & Data Lab</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
