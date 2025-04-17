import Link from "next/link"
import { FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExamsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Exams</h1>
        <p className="mt-2 text-muted-foreground">
          Information about midterm and final exams, including study guides and practice problems
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Midterm 1
            </CardTitle>
            <CardDescription>Information and resources for Midterm 1</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date:</span>
                <span className="text-sm font-medium">TBD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Coverage:</span>
                <span className="text-sm font-medium">Ch. 1-3.7</span>
              </div>
            </div>
            <div className="space-y-2">
              <Link
                href="/exams/midterm1"
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Midterm 1 Information
              </Link>
              <Link
                href="/exams/midterm1/study-guide"
                className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Study Guide
              </Link>
              <Link
                href="/exams/midterm1/practice"
                className="inline-flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Practice Problems
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
