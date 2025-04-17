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
          <h1 className="text-3xl font-bold">Intro + Bits and Bytes</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          Chapter 1, 2.1, 2.2 - Introduction to computer systems and representation of information
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold">Chapter Overview</h2>
          <p className="mt-2">
            This section covers the fundamental concepts of computer systems and how information is represented at the
            lowest level. We'll explore the binary representation of data and how computers process information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Key Concepts</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Computer System Organization</h3>
              <p className="mt-1">
                Understanding the basic components of a computer system: hardware, operating system, and application
                programs. We'll explore how these components interact to execute programs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Information Storage</h3>
              <p className="mt-1">
                Computers store and process information as bits (binary digits). We'll learn how bytes (8 bits) are used
                as the fundamental unit of memory and how data is organized in memory.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Hexadecimal Notation</h3>
              <p className="mt-1">
                Hexadecimal (base-16) notation is commonly used to represent binary values more compactly. We'll learn
                how to convert between binary, decimal, and hexadecimal representations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Lecture Notes</h2>
          <div className="mt-4 rounded-lg border p-4">
            <h3 className="text-xl font-semibold">Bits and Bytes Basics</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>A bit is the smallest unit of data in computing (0 or 1)</li>
              <li>A byte consists of 8 bits and can represent 2^8 = 256 different values</li>
              <li>Word size (typically 32 or 64 bits) determines the maximum size of virtual address space</li>
              <li>Data is stored in memory as a sequence of bytes</li>
              <li>Little endian vs. big endian byte ordering affects how multi-byte data is stored</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Code Examples</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border">
              <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Bit Operations in C</div>
              <pre className="overflow-x-auto p-4 font-mono text-sm">
                {`// Bitwise operations
unsigned int a = 0x12345678;  // Hexadecimal representation
unsigned int b = 0xFFFFFFFF;  // All bits set to 1

// Bitwise AND
unsigned int c = a & b;       // Result: 0x12345678

// Bitwise OR
unsigned int d = a | 0xFF;    // Result: 0x123456FF

// Bitwise XOR
unsigned int e = a ^ 0xFF;    // Result: 0x12345687

// Bitwise NOT
unsigned int f = ~a;          // Result: 0xEDCBA987

// Shift operations
unsigned int g = a << 4;      // Left shift by 4 bits: 0x23456780
unsigned int h = a >> 4;      // Right shift by 4 bits: 0x01234567`}
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
