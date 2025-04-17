import Link from "next/link"
import { ArrowLeft, FileCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CodeExamplesPage() {
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
          <FileCode className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Code Examples</h1>
        </div>
        <p className="mt-2 text-muted-foreground">Example code snippets and programs to illustrate key concepts</p>
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
            <div id="bits-bytes">
              <h2 className="text-2xl font-bold">Bits and Bytes Examples</h2>

              <div className="mt-4 space-y-6">
                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Bit Manipulation Examples</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`#include <stdio.h>

// Function to print a number in binary
void print_binary(unsigned int num) {
    for (int i = 31; i >= 0; i--) {
        printf("%d", (num >> i) & 1);
        if (i % 8 == 0) printf(" ");
    }
    printf("\\n");
}

int main() {
    unsigned int x = 0x12345678;
    unsigned int y = 0xFFFF0000;
    
    printf("x = 0x%08X\\n", x);
    printf("y = 0x%08X\\n", y);
    
    // Bitwise AND
    printf("x & y = 0x%08X\\n", x & y);
    print_binary(x & y);
    
    // Bitwise OR
    printf("x | y = 0x%08X\\n", x | y);
    print_binary(x | y);
    
    // Bitwise XOR
    printf("x ^ y = 0x%08X\\n", x ^ y);
    print_binary(x ^ y);
    
    // Bitwise NOT
    printf("~x = 0x%08X\\n", ~x);
    print_binary(~x);
    
    // Left shift
    printf("x << 4 = 0x%08X\\n", x << 4);
    print_binary(x << 4);
    
    // Right shift
    printf("x >> 4 = 0x%08X\\n", x >> 4);
    print_binary(x >> 4);
    
    return 0;
}`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">
                    Bit Counting and Manipulation Functions
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`#include <stdio.h>

// Count the number of 1 bits in an integer
int count_ones(unsigned int x) {
    int count = 0;
    while (x) {
        count += x & 1;
        x >>= 1;
    }
    return count;
}

// More efficient count using Brian Kernighan's algorithm
int count_ones_kernighan(unsigned int x) {
    int count = 0;
    while (x) {
        x &= (x - 1);  // Clear the least significant bit set
        count++;
    }
    return count;
}

// Get the value of the bit at position p
int get_bit(unsigned int x, int p) {
    return (x >> p) & 1;
}

// Set the bit at position p to 1
unsigned int set_bit(unsigned int x, int p) {
    return x | (1 << p);
}

// Clear the bit at position p (set to 0)
unsigned int clear_bit(unsigned int x, int p) {
    return x & ~(1 << p);
}

// Toggle the bit at position p
unsigned int toggle_bit(unsigned int x, int p) {
    return x ^ (1 << p);
}

int main() {
    unsigned int x = 0x12345678;
    
    printf("x = 0x%08X\\n", x);
    printf("Number of 1 bits: %d\\n", count_ones(x));
    printf("Number of 1 bits (Kernighan): %d\\n", count_ones_kernighan(x));
    
    int position = 5;
    printf("Bit at position %d: %d\\n", position, get_bit(x, position));
    
    printf("After setting bit %d: 0x%08X\\n", position, set_bit(x, position));
    printf("After clearing bit %d: 0x%08X\\n", position, clear_bit(x, position));
    printf("After toggling bit %d: 0x%08X\\n", position, toggle_bit(x, position));
    
    return 0;
}`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Byte Ordering Examples</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`#include <stdio.h>

// Function to check if the system is little-endian
int is_little_endian() {
    unsigned int x = 1;
    char *c = (char*) &x;
    return (int)*c;
}

// Function to print the bytes of a value
void print_bytes(unsigned int x) {
    unsigned char *p = (unsigned char*) &x;
    
    printf("Bytes (hex): ");
    for (int i = 0; i < sizeof(unsigned int); i++) {
        printf("%02X ", p[i]);
    }
    printf("\\n");
    
    printf("Memory layout: ");
    for (int i = 0; i < sizeof(unsigned int); i++) {
        printf("0x%08X: %02X | ", (unsigned int)&p[i], p[i]);
    }
    printf("\\n");
}

// Convert from little-endian to big-endian and vice versa
unsigned int swap_endian(unsigned int x) {
    return ((x & 0xFF) << 24) | 
           ((x & 0xFF00) << 8) | 
           ((x & 0xFF0000) >> 8) | 
           ((x & 0xFF000000) >> 24);
}

int main() {
    unsigned int x = 0x12345678;
    
    printf("x = 0x%08X\\n", x);
    printf("System is %s-endian\\n", is_little_endian() ? "little" : "big");
    
    printf("\\nOriginal value:\\n");
    print_bytes(x);
    
    unsigned int swapped = swap_endian(x);
    printf("\\nAfter endian swap:\\n");
    printf("swapped = 0x%08X\\n", swapped);
    print_bytes(swapped);
    
    return 0;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="integers" className="mt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Integer Representation Examples</h2>

              <div className="mt-4 space-y-6">
                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">
                    Two's Complement Representation
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`#include <stdio.h>
#include <limits.h>

// Print the binary representation of a signed integer
void print_signed_binary(int num) {
    for (int i = sizeof(int) * 8 - 1; i >= 0; i--) {
        printf("%d", (num >> i) & 1);
        if (i % 8 == 0) printf(" ");
    }
    printf("\\n");
}

// Convert a decimal number to its two's complement representation
int to_twos_complement(int num) {
    // For demonstration only - integers are already stored in two's complement
    return num;
}

// Convert from two's complement to decimal
int from_twos_complement(int num) {
    // For demonstration only - integers are already stored in two's complement
    return num;
}

// Negate a number using two's complement
int negate_twos_complement(int num) {
    return ~num + 1;
}

int main() {
    int positive = 42;
    int negative = -42;
    
    printf("Positive number: %d\\n", positive);
    printf("Binary representation: ");
    print_signed_binary(positive);
    
    printf("\\nNegative number: %d\\n", negative);
    printf("Binary representation: ");
    print_signed_binary(negative);
    
    printf("\\nNegating %d using two's complement: %d\\n", positive, negate_twos_complement(positive));
    printf("Binary representation: ");
    print_signed_binary(negate_twos_complement(positive));
    
    printf("\\nInteger range for %d-bit integers:\\n", sizeof(int) * 8);
    printf("Minimum: %d\\n", INT_MIN);
    printf("Maximum: %d\\n", INT_MAX);
    
    // Demonstrate overflow
    int max_int = INT_MAX;
    int min_int = INT_MIN;
    
    printf("\\nOverflow examples:\\n");
    printf("%d + 1 = %d\\n", max_int, max_int + 1);
    printf("%d - 1 = %d\\n", min_int, min_int - 1);
    
    return 0;
}`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Integer Overflow Detection</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`#include <stdio.h>
#include <limits.h>

// Check if adding two signed integers will overflow
int add_overflow_check(int x, int y) {
    // If signs are different, overflow is impossible
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        return 0;
    }
    
    // If both positive
    if (x > 0 && y > 0) {
        return x > INT_MAX - y;
    }
    
    // If both negative
    if (x < 0 && y < 0) {
        return x < INT_MIN - y;
    }
    
    return 0;
}

// Check if adding two unsigned integers will overflow
int uadd_overflow_check(unsigned int x, unsigned int y) {
    return x > UINT_MAX - y;
}

// Check if subtracting two signed integers will overflow
int sub_overflow_check(int x, int y) {
    // Subtraction x - y can be rewritten as x + (-y)
    // Check if -y would overflow
    if (y == INT_MIN) {
        // Special case: cannot represent -INT_MIN in two's complement
        return 1;
    }
    
    return add_overflow_check(x, -y);
}

int main() {
    int a = INT_MAX;
    int b = 1;
    int c = INT_MIN;
    
    printf("a = %d, b = %d, c = %d\\n", a, b, c);
    
    printf("\\nAddition overflow checks:\\n");
    printf("Will a + b overflow? %s\\n", add_overflow_check(a, b) ? "Yes" : "No");
    printf("Result of a + b: %d\\n", a + b);
    
    printf("Will a + a overflow? %s\\n", add_overflow_check(a, a) ? "Yes" : "No");
    printf("Result of a + a: %d\\n", a + a);
    
    printf("\\nSubtraction overflow checks:\\n");
    printf("Will c - b overflow? %s\\n", sub_overflow_check(c, b) ? "Yes" : "No");
    printf("Result of c - b: %d\\n", c - b);
    
    unsigned int ua = UINT_MAX;
    unsigned int ub = 1;
    
    printf("\\nUnsigned addition overflow checks:\\n");
    printf("ua = %u, ub = %u\\n", ua, ub);
    printf("Will ua + ub overflow? %s\\n", uadd_overflow_check(ua, ub) ? "Yes" : "No");
    printf("Result of ua + ub: %u\\n", ua + ub);
    
    return 0;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="assembly-basics" className="mt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Assembly Basics Examples</h2>

              <div className="mt-4 space-y-6">
                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">
                    Basic Assembly Operations (C and Assembly)
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code
long add(long a, long b) {
    return a + b;
}

long subtract(long a, long b) {
    return a - b;
}

long multiply(long a, long b) {
    return a * b;
}

// Equivalent x86-64 assembly
/*
add:
    movq %rdi, %rax    # Move first argument (a) to return register
    addq %rsi, %rax    # Add second argument (b) to return value
    ret                # Return with result in %rax

subtract:
    movq %rdi, %rax    # Move first argument (a) to return register
    subq %rsi, %rax    # Subtract second argument (b) from return value
    ret                # Return with result in %rax

multiply:
    movq %rdi, %rax    # Move first argument (a) to return register
    imulq %rsi, %rax   # Multiply return value by second argument (b)
    ret                # Return with result in %rax
*/`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">
                    Memory Access and Addressing Modes
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code
long array_access(long *array, long index) {
    return array[index];
}

void array_store(long *array, long index, long value) {
    array[index] = value;
}

// Equivalent x86-64 assembly
/*
array_access:
    movq (%rdi,%rsi,8), %rax   # Access array[index], 8 is size of long
    ret

array_store:
    movq %rdx, (%rdi,%rsi,8)   # Store value to array[index]
    ret
*/

// C code demonstrating different addressing modes
long addressing_modes_example() {
    long array[10];
    long i = 3;
    long value = 42;
    
    // Immediate addressing
    long a = 10;
    
    // Register addressing
    long b = a;
    
    // Direct addressing
    array[0] = value;
    
    // Register indirect addressing
    long *ptr = array;
    long c = *ptr;
    
    // Base + displacement addressing
    long d = array[5];  // Equivalent to *(array + 5)
    
    // Indexed addressing
    long e = array[i];  // Equivalent to *(array + i)
    
    // Base + index + displacement addressing
    long f = ptr[i+2];  // Equivalent to *(ptr + i + 2)
    
    return a + b + c + d + e + f;
}

// Some of the equivalent assembly operations:
/*
    # Immediate addressing
    movq $10, %rax
    
    # Register addressing
    movq %rax, %rbx
    
    # Direct addressing
    movq %rdx, (%rdi)
    
    # Register indirect addressing
    movq (%rsi), %rcx
    
    # Base + displacement addressing
    movq 40(%rdi), %rdx  # 5 * 8 = 40 bytes offset
    
    # Indexed addressing
    movq (%rdi,%rcx,8), %r8
    
    # Base + index + displacement addressing
    movq 16(%rsi,%rcx,8), %r9  # (i+2) * 8 = 16 + i*8
*/`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="assembly-control" className="mt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Assembly Control Flow Examples</h2>

              <div className="mt-4 space-y-6">
                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Conditional Statements</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code
long max(long a, long b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Equivalent x86-64 assembly (using jumps)
/*
max_jump:
    cmpq %rsi, %rdi    # Compare a and b
    jle .L1            # Jump if a <= b
    movq %rdi, %rax    # Return a
    ret
.L1:
    movq %rsi, %rax    # Return b
    ret
*/

// Equivalent x86-64 assembly (using conditional move)
/*
max_cmov:
    movq %rsi, %rax    # Assume b is max
    cmpq %rsi, %rdi    # Compare a and b
    cmovg %rdi, %rax   # If a > b, move a to result
    ret
*/

// C code for more complex conditional
long abs_diff(long a, long b) {
    long result;
    if (a >= b) {
        result = a - b;
    } else {
        result = b - a;
    }
    return result;
}

// Equivalent x86-64 assembly
/*
abs_diff:
    movq %rdi, %rax    # Copy a to result
    subq %rsi, %rax    # Compute a - b
    jge .L1            # If result >= 0, we're done
    negq %rax          # Otherwise, negate the result
.L1:
    ret
*/`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Loop Structures</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code for while loop
long sum_while(long n) {
    long sum = 0;
    long i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

// Equivalent x86-64 assembly
/*
sum_while:
    movq $0, %rax      # sum = 0
    movq $1, %rcx      # i = 1
.L1:
    cmpq %rdi, %rcx    # Compare i and n
    jg .L2             # If i > n, exit loop
    addq %rcx, %rax    # sum += i
    incq %rcx          # i++
    jmp .L1            # Jump back to loop condition
.L2:
    ret                # Return sum
*/

// C code for for loop
long sum_for(long n) {
    long sum = 0;
    for (long i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Equivalent x86-64 assembly
/*
sum_for:
    movq $0, %rax      # sum = 0
    movq $1, %rcx      # i = 1
    jmp .L4            # Jump to loop condition
.L3:
    addq %rcx, %rax    # sum += i
    incq %rcx          # i++
.L4:
    cmpq %rdi, %rcx    # Compare i and n
    jle .L3            # If i <= n, continue loop
    ret                # Return sum
*/

// C code for do-while loop
long sum_do_while(long n) {
    long sum = 0;
    long i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
}

// Equivalent x86-64 assembly
/*
sum_do_while:
    movq $0, %rax      # sum = 0
    movq $1, %rcx      # i = 1
.L5:
    addq %rcx, %rax    # sum += i
    incq %rcx          # i++
    cmpq %rdi, %rcx    # Compare i and n
    jle .L5            # If i <= n, continue loop
    ret                # Return sum
*/`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Switch Statements</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code for switch statement
long switch_example(long x) {
    long result;
    switch (x) {
        case 1:
            result = x + 10;
            break;
        case 2:
        case 3:
            result = x * 2;
            break;
        case 4:
            result = x - 5;
            break;
        default:
            result = 0;
    }
    return result;
}

// Equivalent x86-64 assembly (simplified)
/*
switch_example:
    cmpq $4, %rdi          # Compare x with 4
    ja .L5                 # If x > 4, go to default
    jmp *.L7(,%rdi,8)      # Jump table: jump to address at L7 + 8*x
    
    # Jump table
.section .rodata
.L7:
    .quad .L5              # Case 0: default
    .quad .L1              # Case 1
    .quad .L2              # Case 2
    .quad .L2              # Case 3
    .quad .L4              # Case 4

.text
.L1:                       # Case 1
    leaq 10(%rdi), %rax    # result = x + 10
    ret
.L2:                       # Cases 2 and 3
    leaq (%rdi,%rdi), %rax # result = x * 2
    ret
.L4:                       # Case 4
    leaq -5(%rdi), %rax    # result = x - 5
    ret
.L5:                       # Default case
    movq $0, %rax          # result = 0
    ret
*/`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="assembly-procedures" className="mt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Assembly Procedures Examples</h2>

              <div className="mt-4 space-y-6">
                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Basic Procedure Call</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code
long add(long a, long b) {
    return a + b;
}

long caller() {
    long x = 1;
    long y = 2;
    long z = add(x, y);
    return z;
}

// Equivalent x86-64 assembly
/*
add:
    leaq (%rdi,%rsi), %rax  # a + b
    ret

caller:
    pushq %rbp              # Save old base pointer
    movq %rsp, %rbp         # Set new base pointer
    
    movq $1, %rdi           # First argument (x)
    movq $2, %rsi           # Second argument (y)
    call add                # Call add function
    
    movq %rbp, %rsp         # Restore stack pointer
    popq %rbp               # Restore base pointer
    ret                     # Return with result in %rax
*/`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">
                    Stack Frame and Local Variables
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code
long local_vars(long a, long b) {
    long x = a + 1;
    long y = b + 2;
    long z = x * y;
    return z;
}

// Equivalent x86-64 assembly
/*
local_vars:
    pushq %rbp              # Save old base pointer
    movq %rsp, %rbp         # Set new base pointer
    subq $32, %rsp          # Allocate space for local variables
    
    movq %rdi, -8(%rbp)     # Save parameter a
    movq %rsi, -16(%rbp)    # Save parameter b
    
    movq -8(%rbp), %rax     # Load a
    addq $1, %rax           # a + 1
    movq %rax, -24(%rbp)    # Store x = a + 1
    
    movq -16(%rbp), %rax    # Load b
    addq $2, %rax           # b + 2
    movq %rax, -32(%rbp)    # Store y = b + 2
    
    movq -24(%rbp), %rax    # Load x
    imulq -32(%rbp), %rax   # x * y
    
    movq %rbp, %rsp         # Restore stack pointer
    popq %rbp               # Restore base pointer
    ret                     # Return with result in %rax
*/

// More optimized version (using registers instead of stack)
/*
local_vars_opt:
    leaq 1(%rdi), %rax      # x = a + 1
    leaq 2(%rsi), %rcx      # y = b + 2
    imulq %rcx, %rax        # z = x * y
    ret                     # Return with result in %rax
*/`}
                  </pre>
                </div>

                <div className="rounded-lg border">
                  <div className="border-b bg-muted/50 px-4 py-2 font-mono text-sm">Recursive Functions</div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm">
                    {`// C code for factorial
long factorial(long n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
}

// Equivalent x86-64 assembly
/*
factorial:
    pushq %rbp              # Save old base pointer
    movq %rsp, %rbp         # Set new base pointer
    pushq %rbx              # Save callee-saved register
    
    movq %rdi, %rbx         # Save n in callee-saved register
    cmpq $1, %rdi           # Compare n with 1
    jg .L1                  # If n > 1, go to recursive case
    
    movq $1, %rax           # Base case: return 1
    jmp .L2                 # Skip recursive case
    
.L1:                        # Recursive case
    leaq -1(%rdi), %rdi     # Compute n-1
    call factorial          # Call factorial(n-1)
    imulq %rbx, %rax        # Multiply result by n
    
.L2:
    popq %rbx               # Restore callee-saved register
    movq %rbp, %rsp         # Restore stack pointer
    popq %rbp               # Restore base pointer
    ret                     # Return with result in %rax
*/

// C code for Fibonacci
long fibonacci(long n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// Equivalent x86-64 assembly
/*
fibonacci:
    pushq %rbp              # Save old base pointer
    movq %rsp, %rbp         # Set new base pointer
    pushq %rbx              # Save callee-saved register
    pushq %r12              # Save another callee-saved register
    
    movq %rdi, %rbx         # Save n in callee-saved register
    cmpq $1, %rdi           # Compare n with 1
    jg .L3                  # If n > 1, go to recursive case
    
    movq %rdi, %rax         # Base case: return n
    jmp .L4                 # Skip recursive case
    
.L3:                        # Recursive case
    leaq -1(%rbx), %rdi     # Compute n-1
    call fibonacci          # Call fibonacci(n-1)
    movq %rax, %r12         # Save result of fibonacci(n-1)
    
    leaq -2(%rbx), %rdi     # Compute n-2
    call fibonacci          # Call fibonacci(n-2)
    addq %r12, %rax         # Add results: fibonacci(n-1) + fibonacci(n-2)
    
.L4:
    popq %r12               # Restore callee-saved registers
    popq %rbx
    movq %rbp, %rsp         # Restore stack pointer
    popq %rbp               # Restore base pointer
    ret                     # Return with result in %rax
*/`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
