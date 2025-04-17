import Link from "next/link"
import { BookOpen, Code, FileText, Home } from "lucide-react"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center text-sm font-medium transition-colors hover:text-primary">
        <Home className="mr-2 h-4 w-4" />
        Home
      </Link>
      <Link
        href="/chapters"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <BookOpen className="mr-2 h-4 w-4" />
        Chapters
      </Link>
      <Link
        href="/problems"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Code className="mr-2 h-4 w-4" />
        Problems
      </Link>
      <Link
        href="/exams"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <FileText className="mr-2 h-4 w-4" />
        Exams
      </Link>
    </nav>
  )
}
