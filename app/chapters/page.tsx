import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ChaptersPage() {
  const chapters = [
    {
      id: "intro-bits-bytes",
      title: "Intro + Bits and Bytes",
      description: "Introduction to computer systems and representation of information",
      reading: "Ch. 1, 2.1, 2.2",
      date: "4/3",
    },
    {
      id: "integers",
      title: "Integers",
      description: "Integer representation and arithmetic",
      reading: "Ch. 2.1-2.3",
      date: "4/4",
    },
    {
      id: "assembly-basics",
      title: "Assembly I: Basics",
      description: "Introduction to assembly language programming",
      reading: "Ch. 3.1-3.5",
      date: "4/8, 4/10",
    },
    {
      id: "assembly-control",
      title: "Assembly II: Control",
      description: "Control structures in assembly language",
      reading: "Ch. 3.6",
      date: "4/15",
    },
    {
      id: "assembly-procedures",
      title: "Assembly III: Procedures",
      description: "Procedures and the stack in assembly language",
      reading: "Ch. 3.7",
      date: "4/17",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Course Chapters</h1>
        <p className="mt-2 text-muted-foreground">Based on "Computer Systems: A Programmer's Perspective" (3rd ed.)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <Card key={chapter.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {chapter.title}
              </CardTitle>
              <CardDescription>{chapter.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Reading:</span>
                  <span className="text-sm font-medium">{chapter.reading}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date:</span>
                  <span className="text-sm font-medium">{chapter.date}</span>
                </div>
              </div>
              <Link
                href={`/chapters/${chapter.id}`}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                View Chapter
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
