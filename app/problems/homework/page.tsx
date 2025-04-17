import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomeworkProblemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/problems" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Problems
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Homework Problems</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          Assigned homework problems from the textbook and additional sources
        </p>
      </div>

      <Tabs defaultValue="bits-bytes" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="bits-bytes">Bits & Bytes</TabsTrigger>
          <TabsTrigger value="integers">Integers</TabsTrigger>
          <TabsTrigger value="assembly-basics">Assembly I</TabsTrigger>
          <TabsTrigger value="assembly-control">Assembly II</TabsTrigger>
          <TabsTrigger value="assembly-procedures">Assembly III</TabsTrigger>
        </TabsList>
        <TabsContent value="bits-bytes" className="mt-6">
          <div className="space-y-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold" id="bits-bytes">
                Bits and Bytes Homework
              </h2>
              <p className="mt-2 text-muted-foreground">
                Complete the following problems from Chapter 2 of the textbook.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Problem 2.6</h3>
                  <p className="mt-1">
                    Using only bit-level and logical operations, write a C expression that is equivalent to x &lt; y.
                    Assume x and y are signed integers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Problem 2.7</h3>
                  <p className="mt-1">What is the smallest value of x that will make the following expression true?</p>
                  <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">(x &lt;&lt; 4) + x = 432</pre>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Problem 2.12</h3>
                  <p className="mt-1">
                    Write a function invert(x,p,n) that returns x with the n bits that begin at position p inverted,
                    leaving the others unchanged.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-bold">Additional Practice</h2>
              <p className="mt-2 text-muted-foreground">
                These additional problems will help reinforce your understanding of bits and bytes.
              </p>

              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Problem A1</h3>
                  <p className="mt-1">
                    Convert the following decimal numbers to binary and hexadecimal: 42, 255, 128, 1023.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Problem A2</h3>
                  <p className="mt-1">
                    Write a C function count_ones(unsigned int x) that returns the number of 1 bits in x.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="integers" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold">Integers Homework</h2>
            <p className="mt-2 text-muted-foreground">
              Complete the following problems from Chapter 2 of the textbook.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Problem 2.27</h3>
                <p className="mt-1">Write a function with the following prototype:</p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  /* Determine whether arguments can be added without overflow */ int uadd_ok(unsigned x, unsigned y);
                </pre>
                <p className="mt-2">This function should return 1 if the sum x+y does not overflow, and 0 otherwise.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Problem 2.30</h3>
                <p className="mt-1">Write a function with the following prototype:</p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  /* Determine whether arguments can be subtracted without overflow */ int tadd_ok(int x, int y);
                </pre>
                <p className="mt-2">This function should return 1 if the computation x-y does not overflow.</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="assembly-basics" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold">Assembly I: Basics Homework</h2>
            <p className="mt-2 text-muted-foreground">
              Complete the following problems related to basic assembly language concepts.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Problem 3.4</h3>
                <p className="mt-1">For the following C code, translate it into x86-64 assembly code:</p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  {`long mult2(long a, long b) {
    long s = a * b;
    return s;
}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Problem 3.8</h3>
                <p className="mt-1">Given the following assembly code, write the equivalent C code:</p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  {`shift_left4_rightn:
    movq %rdi, %rax
    salq $4, %rax
    movl %esi, %ecx
    sarq %cl, %rax
    ret`}
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="assembly-control" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold">Assembly II: Control Homework</h2>
            <p className="mt-2 text-muted-foreground">
              Complete the following problems related to control flow in assembly language.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Problem 3.16</h3>
                <p className="mt-1">
                  Translate the following C code into x86-64 assembly code, using conditional moves:
                </p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  {`long cond(long a, long b, long c) {
    if (a < b) {
        return c;
    } else {
        return 0;
    }
}`}
                </pre>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Problem 3.20</h3>
                <p className="mt-1">Translate the following C code into x86-64 assembly code:</p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  {`long loop_while(long a, long b) {
    long result = 0;
    while (a < b) {
        result = result + a;
        a = a + 1;
    }
    return result;
}`}
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="assembly-procedures" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold">Assembly III: Procedures Homework</h2>
            <p className="mt-2 text-muted-foreground">
              Complete the following problems related to procedures in assembly language.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Problem 3.26</h3>
                <p className="mt-1">The following C function generates the nth number in the Fibonacci sequence:</p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  {`long fib(long n) {
    if (n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}`}
                </pre>
                <p className="mt-2">Translate this function into x86-64 assembly code.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Problem 3.30</h3>
                <p className="mt-1">
                  Write x86-64 assembly code for a function that computes the factorial of its argument:
                </p>
                <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
                  {`/* Compute n! */
long factorial(long n);`}
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
