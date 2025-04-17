import Link from "next/link"
import { Code, FileCode, FileText, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProblemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Problems & Practice</h1>
        <p className="mt-2 text-muted-foreground">
          Homework problems, practice exercises, lab assignments, and code examples
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Homework Problems
            </CardTitle>
            <CardDescription>Assigned homework problems from the textbook and additional sources</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Complete these problems to reinforce your understanding of course concepts.
            </p>
            <Link
              href="/problems/homework"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              View Homework Problems
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Practice Problems
            </CardTitle>
            <CardDescription>Additional practice problems to test your knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              These optional problems provide extra practice for mastering course material.
            </p>
            <Link
              href="/problems/practice"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              View Practice Problems
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Lab Assignments
            </CardTitle>
            <CardDescription>Hands-on lab assignments to apply course concepts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Lab assignments provide practical experience with computer systems concepts.
            </p>
            <Link
              href="/problems/labs"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              View Lab Assignments
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className="h-5 w-5" />
              Code Examples
            </CardTitle>
            <CardDescription>Example code snippets and programs to illustrate concepts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              These examples demonstrate key concepts from the course in practical code.
            </p>
            <Link
              href="/problems/examples"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              View Code Examples
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
