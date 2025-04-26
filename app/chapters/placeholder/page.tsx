import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IntroBitsBytesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/chapters" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapters
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Lesson name</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          Chapter x.1, x.2 - Summary of lesson
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold">Chapter Overview</h2>
          <p className="mt-2">
          Summary of all chapters/ lecture
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Key Concepts</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">x.1 Name</h3>
              <p className="mt-1">
                Summary of chapter
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">x.2 Name</h3>
              <p className="mt-1">
                Summary of chapter
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">x.3 Name</h3>
              <p className="mt-1">
                Summary of chapter
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Lecture Notes (whatever is in the slides)</h2>
          <div className="mt-4 rounded-lg border p-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Overview point 1</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>What the slides say</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Overview point 2</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>What the slides say</li>
                <li>Examples mayhaps &lt;3:</li>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Example 1</li>
                  <li>Example 2</li>
                  <li>Example 3</li>
                </ul>
                <li>If a number is signed as opposed to unsigned, the first digit is taken as negative.</li>
                <li>Examples:</li>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>1000 = -8</li>
                  <li>1001 = -7 (-8 + 1)</li>
                </ul>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Code Examples</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border">
              <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Bit Operations in C</div>
              <pre className="overflow-x-auto p-4 font-mono text-sm">
                {`// Too much coding bro
while (working)
  {
     coffee.drink();
     work.execute();
     if (coffee == "empty")
     {
        if (coffeepot == "empty")
           coffeepot.brew();
        coffee.refill(); 
     }
  }`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Related Resources</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Link
              href="/problems/homework#bits-bytes"
              className="rounded-lg border p-4 hover:bg-accent transition-colors"
            >
              <h3 className="font-semibold">Homework Problems</h3>
              <p className="mt-1 text-sm text-muted-foreground">Practice problems related to bits and bytes</p>
            </Link>
            <Link
              href="/problems/examples#bits-bytes"
              className="rounded-lg border p-4 hover:bg-accent transition-colors"
            >
              <h3 className="font-semibold">Code Examples</h3>
              <p className="mt-1 text-sm text-muted-foreground">Additional code examples for bit manipulation</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
