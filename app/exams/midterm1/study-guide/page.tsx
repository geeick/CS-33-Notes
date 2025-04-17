import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Midterm1StudyGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Button variant="outline" size="sm" asChild>
          <Link href="/exams/midterm1" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Midterm 1
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Midterm 1 Study Guide</h1>
        </div>
        <p className="mt-2 text-muted-foreground">
          A comprehensive guide to help you prepare for Midterm 1
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Introduction to Computer Systems (Ch. 1)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Computer system components: hardware, operating system, application programs</li>
                  <li>Program execution: compilation, assembly, linking, loading</li>
                  <li>Memory hierarchy: registers, cache, main memory, disk storage</li>
                  <li>Operating system's role in managing resources</li>
                  <li>Process abstraction and virtual memory</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Important Terms</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li><strong>Compilation</strong>: The process of translating high-level code to assembly</li>
                  <li><strong>Assembly</strong>: The process of translating assembly code to machine code</li>
                  <li><strong>Linking</strong>: The process of combining object files and libraries</li>
                  <li><strong>Process</strong>: An instance of a running program</li>
                  <li><strong>Virtual memory</strong>: Abstraction that provides each process with the illusion of having the entire memory space</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Information Representation: Bits and Bytes (Ch. 2.1-2.2)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Binary, decimal, and hexadecimal number systems</li>
                  <li>Bit-level operations: AND, OR, NOT, XOR</li>
                  <li>Shift operations: logical and arithmetic shifts</li>
                  <li>Byte ordering: little endian vs. big endian</li>
                  <li>Boolean algebra and logic operations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Important Formulas</h3>
                <div className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                  <div>x & y = Bitwise AND of x and y</div>
                  <div>x | y = Bitwise OR of x and y</div>
                  <div>x ^ y = Bitwise XOR of x and y</div>
                  <div>~x = Bitwise NOT of x</div>
                  <div>x &lt;&lt; y = x shifted left by y bits</div>
                  <div>x &gt;&gt; y = x shifted right by y bits (arithmetic)</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Practice Problems</h3>
                <ol className="mt-2 list-decimal pl-6 space-y-2">
                  <li>
                    <p>Convert the following decimal numbers to binary and hexadecimal:</p>
                    <p>a) 42  b) 255  c) 128  d) 1023</p>
                  </li>
                  <li>
                    <p>Perform the following bit operations:</p>
                    <p>a) 0x5A & 0x3F  b) 0x5A | 0x3F  c) 0x5A ^ 0x3F  d) ~0x5A</p>
                  </li>
                  <li>
                    <p>What is the result of the following operations?</p>\
                    <p>a) 0x5A << 2  b) 0x5A >> 2</p>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>Integer Representation and Arithmetic (Ch. 2.1-2.3)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Unsigned and two's complement representation</li>
                  <li>Range of values for different word sizes</li>
                  <li>Integer addition, subtraction, multiplication, and division</li>
                  <li>Overflow detection and handling</li>
                  <li>Sign extension and truncation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Important Formulas</h3>
                <div className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                  <div>Range of unsigned n-bit integers: 0 to 2^n - 1</div>
                  <div>Range of signed n-bit integers: -2^(n-1) to 2^(n-1) - 1</div>
                  <div>Two's complement: -x = ~x + 1</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Practice Problems</h3>
                <ol className="mt-2 list-decimal pl-6 space-y-2">
                  <li>
                    <p>Convert the following decimal numbers to 8-bit two's complement representation:</p>
                    <p>a) 42  b) -42  c) 127  d) -128</p>
                  </li>
                  <li>
                    <p>Perform the following operations on 8-bit two's complement numbers:</p>
                    <p>a) 0x3A + 0x2C  b) 0x3A - 0x2C  c) 0x7F + 0x01  d) 0x80 - 0x01</p>
                  </li>
                  <li>
                    <p>Determine if the following operations cause overflow:</p>
                    <p>a) 0x7F + 0x01 (signed)  b) 0xFF + 0x01 (unsigned)</p>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>Assembly Language Basics (Ch. 3.1-3.5)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>x86-64 architecture and registers</li>
                  <li>Data movement instructions: MOV, MOVZ, MOVS</li>
                  <li>Arithmetic operations: ADD, SUB, IMUL, IDIV</li>
                  <li>Logical operations: AND, OR, XOR, NOT</li>
                  <li>Shift operations: SAL, SAR, SHL, SHR</li>
                  <li>Addressing modes: immediate, register, memory</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Important Registers</h3>
                <div className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                  <div>%rax - Return value, also used in idiv/imul</div>
                  <div>%rdi, %rsi, %rdx, %rcx, %r8, %r9 - Function arguments</div>
                  <div>%rbp - Base pointer (frame pointer)</div>
                  <div>%rsp - Stack pointer</div>
                  <div>%r10-%r15 - Caller-saved registers</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Practice Problems</h3>
                <ol className="mt-2 list-decimal pl-6 space-y-2">
                  <li>
                    <p>Translate the following C code to x86-64 assembly:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`long add(long a, long b) {
    return a + b;
}`}
                    </pre>
                  </li>
                  <li>
                    <p>Translate the following C code to x86-64 assembly:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`long arith(long a, long b, long c) {
    long d = a * b;
    long e = d + c;
    return e;
}`}
                    </pre>
                  </li>
                  <li>
                    <p>Given the following assembly code, write the equivalent C code:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`mystery:
    leaq (%rdi, %rdi, 2), %rax
    salq $2, %rax
    ret`}
                    </pre>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>Control Structures in Assembly (Ch. 3.6)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Condition codes: CF, ZF, SF, OF</li>
                  <li>Comparison instructions: CMP, TEST</li>
                  <li>Conditional moves: CMOV</li>
                  <li>Jump instructions: JMP, JE, JNE, JL, JLE, JG, JGE</li>
                  <li>Implementing if-else statements</li>
                  <li>Implementing loops (while, for, do-while)</li>
                  <li>Switch statements and jump tables</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Condition Codes</h3>
                <div className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                  <div>CF - Carry Flag (unsigned overflow)</div>
                  <div>ZF - Zero Flag (result is zero)</div>
                  <div>SF - Sign Flag (result is negative)</div>
                  <div>OF - Overflow Flag (signed overflow)</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Practice Problems</h3>
                <ol className="mt-2 list-decimal pl-6 space-y-2">
                  <li>
                    <p>Translate the following C code to x86-64 assembly:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`if (a < b) {
    c = a + b;
} else {
    c = a - b;
}`}
                    </pre>
                  </li>
                  <li>
                    <p>Translate the following C code to x86-64 assembly:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`long sum = 0;
for (long i = 0; i < n; i++) {
    sum += i;
}`}
                    </pre>
                  </li>
                  <li>
                    <p>Given the following assembly code, write the equivalent C code:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`loop:
    testq %rsi, %rsi
    jle done
    addq %rsi, %rax
    subq $1, %rsi
    jmp loop
done:
    ret`}
                    </pre>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger>Procedures in Assembly (Ch. 3.7)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Key Concepts</h3>
                <ul className="mt-2 list-disc pl-6 space-y-1">
                  <li>Stack frame organization</li>
                  <li>Function call conventions</li>
                  <li>Register usage and preservation</li>
                  <li>Parameter passing</li>
                  <li>Local variables and stack allocation</li>
                  <li>Return values</li>
                  <li>Recursive functions</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">x86-64 Calling Convention</h3>
                <div className="mt-2 rounded-md bg-muted p-4 font-mono text-sm">
                  <div>Arguments: %rdi, %rsi, %rdx, %rcx, %r8, %r9, then stack</div>
                  <div>Return value: %rax</div>
                  <div>Caller-saved: %rax, %rdi, %rsi, %rdx, %rcx, %r8, %r9, %r10, %r11</div>
                  <div>Callee-saved: %rbx, %rbp, %r12, %r13, %r14, %r15</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold">Practice Problems</h3>
                <ol className="mt-2 list-decimal pl-6 space-y-2">
                  <li>
                    <p>Translate the following C code to x86-64 assembly:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`long factorial(long n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
}`}
                    </pre>
                  </li>
                  <li>
                    <p>Translate the following C code to x86-64 assembly:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`long sum(long a, long b, long c, long d, long e, long f, long g) {
    return a + b + c + d + e + f + g;
}`}
                    </pre>
                  </li>
                  <li>
                    <p>Given the following assembly code, write the equivalent C code:</p>
                    <pre className="mt-2 rounded-md bg-muted p-2 font-mono text-sm">
{`func:
    pushq %rbp
    movq %rsp, %rbp
    subq $16, %rsp
    movq %rdi, -8(%rbp)
    cmpq $1, %rdi
    jle base
    leaq -1(%rdi), %rdi
    call func
    movq -8(%rbp), %rdx
    imulq %rdx, %rax
    jmp done
base:
    movq $1, %rax
done:
    leave
    ret`}
                    </pre>
                  </li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div
  className = "mt-8" > <h2 className="text-2xl font-bold">Study Strategies</h2> < div
  className =
    "mt-4 space-y-4" >
    (
      <div className="rounded-lg border p-4">
        <h3 className="text-lg font-semibold">Active Learning</h3>
        <p className="mt-2">
          Don't just read the material passively. Engage with it by solving problems, writing code, and explaining
          concepts to others. Teaching a concept is one of the best ways to solidify your understanding.
        </p>
      </div>
    ) <
    div
  className = "rounded-lg border p-4" > <h3 className="text-lg font-semibold">Practice Assembly Translation</h3> < p
  className = "mt-2" > Regularly
  practice
  translating
  between
  C
  and
  assembly
  code.Start
  with simple functions
  and
  gradually
  work
  your
  way
  up
  to
  more
  complex
  ones
  involving
  control
  structures
  and
  procedure
  calls.
  </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Create a Cheat Sheet</h3>
            <p className="mt-2">
              As you study, compile a list of important formulas, register usages, and common assembly instructions. This will not only serve as a reference during the exam but also help you organize and memorize the material.
            </p>
          </div>
          
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">Form Study Groups</h3>
            <p className="mt-2">
              Collaborate
  with classmates to
  discuss
  difficult
  concepts
  and
  solve
  problems
  together.Explaining
  concepts
  to
  others
  and
  hearing
  different
  perspectives
  can
  deepen
  your
  understanding.
  </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/exams/midterm1">Back to Midterm 1</Link>
        </Button>
        <Button asChild>
          <Link href="/exams/midterm1/practice">Practice Problems</Link>
        </Button>
      </div>
    </div>
  )
}
